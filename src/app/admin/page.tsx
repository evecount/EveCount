
'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { useAuth, useUser, useFirestore, useDoc, useMemoFirebase, useCollection, updateDocumentNonBlocking, addDocumentNonBlocking } from '@/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';
import { Loader2, ShieldAlert, BadgeCheck, Check, X, Rss, Newspaper, Lightbulb, Link as LinkIcon, Users2, PlusCircle, Edit, Hand, Code, Briefcase, Bot, Eye, Copy, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { agentCrew } from '@/lib/agents';
import { CommandCenterChat } from '@/components/CommandCenterChat';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { incubatorMembers } from '@/lib/incubator-members';
import { challenges } from '@/lib/challenges';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { generateProposalAction } from '@/app/actions';

interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  role: 'admin' | 'partner' | 'user';
}

interface OutreachProposal {
  id: string;
  companyName: string;
  sourceUrl: string;
  status: "draft" | "sent" | "recalled";
  proposalTitle: string;
  proposalBody: string;
  strategicRationale: string;
  agentId: string;
  createdAt: string; // ISO String
}

interface Source {
  id: string;
  url: string;
  type: "RSS" | "Reddit" | "NewsAPI";
  status: "pending" | "active" | "rejected";
  suggestedBy: string;
  suggestedById: string;
  createdAt: string; // ISO String
}

interface Submission {
    id: string;
    applicationType: "Venture Pitch" | "Incubator Application" | "Career Inquiry" | "Partnership Inquiry";
    submitterName: string;
    contactEmail: string;
    contactPhone: string;
    submissionDate: string; // ISO String
    status: "New" | "In Review" | "Archived" | "Challenge Created";
    companyName?: string;
    visionPitch?: string;
    portfolioUrl?: string;
    roleInterest?: string;
    resumeUrl?: string;
    partnershipInterest?: string;
    message?: string;
}

type StatusVariant = "default" | "destructive" | "secondary" | "outline";

function getStatusVariant(status: OutreachProposal['status'] | Source['status'] | Submission['status'] | string): StatusVariant {
    switch (status) {
      case 'approved':
      case 'active':
      case 'Live':
      case 'Completed':
      case 'Assigned':
      case 'Challenge Created':
        return 'default';
      case 'rejected':
      case 'recalled':
      case 'Archived':
        return 'destructive';
      case 'sent':
      case 'Open':
      case 'In Review':
        return 'secondary';
       case 'pending':
       case 'New':
       case 'draft':
        return 'outline';
      default:
        return 'outline';
    }
}

function SourceEditor({ source, onSave, onCancel }: { source: Partial<Source>, onSave: (sourceData: Partial<Source>) => void, onCancel: () => void }) {
    const [sourceData, setSourceData] = useState(source);

    const handleSave = () => {
        onSave(sourceData);
    };

    return (
        <>
            <DialogHeader>
                <DialogTitle>{source.id ? 'Edit Source' : 'Add New Source'}</DialogTitle>
                <DialogDescription>
                    {source.id ? 'Modify the details of this intelligence source.' : 'Add a new intelligence source for the agents to monitor.'}
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="url" className="text-right">URL</Label>
                    <Input id="url" value={sourceData.url || ''} onChange={(e) => setSourceData({ ...sourceData, url: e.target.value })} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="type" className="text-right">Type</Label>
                     <Select
                        value={sourceData.type}
                        onValueChange={(value: Source['type']) => setSourceData({ ...sourceData, type: value })}
                    >
                        <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select source type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="RSS">RSS</SelectItem>
                            <SelectItem value="Reddit">Reddit</SelectItem>
                            <SelectItem value="NewsAPI">NewsAPI</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                 <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="status" className="text-right">Status</Label>
                     <Select
                        value={sourceData.status}
                        onValueChange={(value: Source['status']) => setSourceData({ ...sourceData, status: value })}
                    >
                        <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="rejected">Rejected</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <DialogFooter>
                <Button variant="outline" onClick={onCancel}>Cancel</Button>
                <Button onClick={handleSave}>Save Source</Button>
            </DialogFooter>
        </>
    );
}

function AdminDashboard() {
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  const [isSourceEditorOpen, setIsSourceEditorOpen] = useState(false);
  const [editingSource, setEditingSource] = useState<Partial<Source> | null>(null);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState("operations");


  const proposalsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'outreachProposals');
  }, [firestore]);

  const { data: proposals, isLoading: proposalsLoading } = useCollection<OutreachProposal>(proposalsQuery);
  
  const sourcesQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'sources');
  }, [firestore]);

  const { data: sources, isLoading: sourcesLoading } = useCollection<Source>(sourcesQuery);

  const submissionsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'submissions');
  }, [firestore]);

  const { data: submissions, isLoading: submissionsLoading } = useCollection<Submission>(submissionsQuery);

  const handleUpdateProposalStatus = (proposalId: string, status: OutreachProposal['status']) => {
    if (!firestore) return;
    const proposalRef = doc(firestore, 'outreachProposals', proposalId);
    updateDocumentNonBlocking(proposalRef, { status });
  };
  
  const handleEditSource = (source: Source) => {
    setEditingSource(source);
    setIsSourceEditorOpen(true);
  };

  const handleAddNewSource = () => {
    setEditingSource({
        type: 'RSS',
        status: 'active',
        suggestedBy: user?.displayName || 'Admin',
        createdAt: new Date().toISOString(),
    });
    setIsSourceEditorOpen(true);
  };

 const handleSaveSource = (sourceData: Partial<Source>) => {
    if (!firestore || !user) return;
    const sourceToSave = { ...sourceData };

    if (sourceToSave.id) {
        const sourceRef = doc(firestore, 'sources', sourceToSave.id);
        const { id, ...dataToUpdate } = sourceToSave;
        updateDocumentNonBlocking(sourceRef, dataToUpdate);
    } else {
        const sourcesCollection = collection(firestore, 'sources');
        addDocumentNonBlocking(sourcesCollection, {
            ...sourceData,
            suggestedById: user.uid,
        });
    }
    
    setIsSourceEditorOpen(false);
    setEditingSource(null);
  };

  const handleUpdateSubmissionStatus = (submissionId: string, status: Submission['status']) => {
    if (!firestore) return;
    const submissionRef = doc(firestore, 'submissions', submissionId);
    updateDocumentNonBlocking(submissionRef, { status });
  };

    const handleGenerateProposal = async (submission: Submission) => {
        if (!firestore) return;
        setIsGenerating(true);

        const result = await generateProposalAction({
            companyName: submission.companyName || submission.submitterName,
            triggeringNews: `New Venture Pitch Submission: "${submission.visionPitch?.substring(0, 150)}..."`,
            sovereignDirective: "Analyze this venture pitch and formulate a direct action proposal for internal review.",
        });

        if (result.success && result.data) {
            const proposalsCollection = collection(firestore, 'outreachProposals');
            addDocumentNonBlocking(proposalsCollection, {
                companyName: submission.companyName || submission.submitterName,
                sourceUrl: `/admin?submission=${submission.id}`,
                status: 'draft',
                proposalTitle: result.data.proposalTitle,
                proposalBody: result.data.proposalBody,
                strategicRationale: result.data.strategicRationale,
                agentId: 'ai-strategist',
                createdAt: new Date().toISOString(),
            });
            toast({
                title: "Proposal Generated",
                description: "The Strategist has drafted a new proposal. You can review it in the Operations tab.",
            });
            setSelectedSubmission(null);
            setActiveTab("operations");
        } else {
            toast({
                variant: "destructive",
                title: "Proposal Generation Failed",
                description: result.message || "The agent could not generate a proposal.",
            });
        }
        setIsGenerating(false);
    };

    const handleCopyPrompt = (submission: Submission) => {
        const prompt = `Please review and provide your strategic analysis on this submission:\n\n${JSON.stringify({
            id: submission.id,
            applicationType: submission.applicationType,
            submitterName: submission.submitterName,
            companyName: submission.companyName,
            visionPitch: submission.visionPitch,
        }, null, 2)}`;
        navigator.clipboard.writeText(prompt);
        toast({
            title: "Prompt Copied",
            description: "Paste the prompt into the chat with an agent to discuss this submission.",
        });
    };

  return (
    <div className="space-y-8">
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold text-foreground">Command Center</h1>
                <p className="text-muted-foreground">Welcome back, {user?.displayName || 'Admin'}.</p>
            </div>
            <BadgeCheck className="h-10 w-10 text-green-500" />
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} defaultValue="operations" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="operations">Operations</TabsTrigger>
            <TabsTrigger value="submissions">Submissions</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
            <TabsTrigger value="roster">Roster</TabsTrigger>
          </TabsList>
          
          <TabsContent value="operations" className="mt-6 space-y-8">
            <Card className="bg-secondary/20 text-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground"><Users2 className="h-6 w-6" /> The Command Center Crew</CardTitle>
                <CardDescription>Your autonomous team, reflecting the core facets of the Eve Count operational strategy.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                  {agentCrew.map(agent => (
                    <Card key={agent.id} className="bg-background flex flex-col text-foreground">
                      <CardHeader className="flex-row items-center gap-4 space-y-0 pb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                          <agent.Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-bold text-foreground">{agent.name}</p>
                          <p className="text-sm text-muted-foreground">{agent.role}</p>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-sm text-muted-foreground">{agent.focus}</p>
                      </CardContent>
                      <CardFooter>
                        <Badge variant="outline">{agent.cluster}</Badge>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary/20 text-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground"><Bot className="h-6 w-6" /> Agent Communications</CardTitle>
                <CardDescription>Speak directly with your autonomous crew members.</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[600px] border-t">
                    <CommandCenterChat />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary/20 text-foreground">
              <CardHeader>
                <CardTitle className="text-foreground">Sovereign Engine: Autonomous Outreach</CardTitle>
                <CardDescription>Monitor agent-initiated outreach. Your role is to enable, not control. Intervene only to recall a proposal that deviates from your strategic intent.</CardDescription>
              </CardHeader>
              <CardContent>
                {proposalsLoading && (
                  <div className="flex justify-center items-center h-40">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                )}
                {!proposalsLoading && (!proposals || proposals.length === 0) && (
                  <p className="text-center text-muted-foreground py-8">No outreach proposals initiated by agents yet.</p>
                )}
                {!proposalsLoading && proposals && proposals.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {proposals.map(proposal => (
                            <Card key={proposal.id} className="bg-background flex flex-col text-foreground">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle className="text-lg text-foreground">{proposal.companyName}</CardTitle>
                                            <CardDescription>
                                                Generated on {format(new Date(proposal.createdAt), "PPP")} by {proposal.agentId}
                                            </CardDescription>
                                        </div>
                                        <Badge variant={getStatusVariant(proposal.status)}>{proposal.status}</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow space-y-4">
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">{proposal.proposalTitle}</h3>
                                        <p className="text-sm text-muted-foreground line-clamp-3">{proposal.proposalBody}</p>
                                    </div>
                                    <div className="border-t pt-4 mt-4">
                                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Lightbulb className="h-4 w-4 text-primary" /> Strategic Rationale</h4>
                                        <p className="text-sm text-muted-foreground italic">"{proposal.strategicRationale}"</p>
                                        <a href={proposal.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline mt-2 flex items-center gap-1">
                                            <LinkIcon className="h-3 w-3" />
                                            Source Submission
                                        </a>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-end gap-2 border-t pt-4">
                                    <Button variant="outline" size="sm" onClick={() => handleUpdateProposalStatus(proposal.id, 'sent')} disabled={proposal.status === 'sent'}>
                                        <Check className="h-4 w-4 mr-1" /> Send
                                    </Button>
                                    <Button variant="destructive" size="sm" onClick={() => handleUpdateProposalStatus(proposal.id, 'recalled')} disabled={proposal.status !== 'sent'}>
                                        <X className="h-4 w-4 mr-1" /> Recall
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                )}
              </CardContent>
            </Card>
            
            <Dialog open={isSourceEditorOpen} onOpenChange={setIsSourceEditorOpen}>
                <DialogContent>
                    {editingSource && <SourceEditor source={editingSource} onSave={handleSaveSource} onCancel={() => setIsSourceEditorOpen(false)} />}
                </DialogContent>
            </Dialog>

            <Card className="bg-secondary/20 text-foreground">
              <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="text-foreground">Sovereign Engine: Data Sources</CardTitle>
                        <CardDescription>Manage the intelligence sources fueling the Sovereign Engine.</CardDescription>
                    </div>
                    <Button size="sm" onClick={handleAddNewSource}>
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Add Source
                    </Button>
                </div>
              </CardHeader>
              <CardContent>
                {sourcesLoading && (
                  <div className="flex justify-center items-center h-40">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                )}
                {!sourcesLoading && (!sources || sources.length === 0) && (
                  <p className="text-center text-muted-foreground py-8">No data sources configured.</p>
                )}
                {!sourcesLoading && sources && sources.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sources.map(source => (
                      <Card key={source.id} className="bg-background flex flex-col text-foreground">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                              <div>
                                  <CardTitle className="text-lg flex items-center gap-2 text-foreground">
                                    {source.type === 'RSS' ? <Rss className="h-5 w-5 text-primary"/> : <Newspaper className="h-5 w-5 text-primary" />}
                                    {source.type} Feed
                                  </CardTitle>
                                  <CardDescription>Suggested by {source.suggestedBy} on {format(new Date(source.createdAt), "PPP")}</CardDescription>
                              </div>
                              <Badge variant={getStatusVariant(source.status)}>{source.status}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:underline break-all">
                            {source.url}
                          </a>
                        </CardContent>
                        <CardFooter className="flex justify-end gap-2 border-t pt-4">
                            <Button variant="outline" size="sm" onClick={() => handleEditSource(source)}>
                                <Edit className="h-4 w-4 mr-1" /> Edit
                            </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="submissions" className="mt-6 space-y-6">
            <Card className="bg-secondary/20 text-foreground">
                <CardHeader>
                    <CardTitle className="text-foreground">Submissions Inbox</CardTitle>
                    <CardDescription>Review and manage all incoming applications and inquiries.</CardDescription>
                </CardHeader>
                <CardContent>
                    {submissionsLoading ? (
                        <div className="flex justify-center items-center h-40">
                            <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        </div>
                    ) : !submissions || submissions.length === 0 ? (
                        <p className="text-center text-muted-foreground py-8">No submissions yet.</p>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Submitter</TableHead>
                                    <TableHead>Company</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {submissions.map(sub => (
                                    <TableRow key={sub.id}>
                                        <TableCell>{format(new Date(sub.submissionDate), "PPP")}</TableCell>
                                        <TableCell>{sub.applicationType}</TableCell>
                                        <TableCell className="font-medium text-foreground">{sub.submitterName}</TableCell>
                                        <TableCell>{sub.companyName || 'N/A'}</TableCell>
                                        <TableCell><Badge variant={getStatusVariant(sub.status)}>{sub.status}</Badge></TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="outline" size="sm" onClick={() => setSelectedSubmission(sub)}>
                                                <Eye className="h-4 w-4 mr-2"/>View
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>
          </TabsContent>


          <TabsContent value="challenges" className="mt-6 space-y-6">
             <Card className="bg-secondary/20 text-foreground">
                <CardHeader>
                    <CardTitle className="text-foreground">Incubator Challenges</CardTitle>
                    <CardDescription>A board of high-value business problems ready to be matched with AI practitioners.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {challenges.map(challenge => (
                            <Card key={challenge.id} className="bg-background flex flex-col text-foreground">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <CardTitle className="text-lg text-foreground">{challenge.title}</CardTitle>
                                        <Badge variant={getStatusVariant(challenge.status)}>{challenge.status}</Badge>
                                    </div>
                                    <CardDescription>{challenge.domain}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-sm text-muted-foreground">{challenge.description}</p>
                                </CardContent>
                                <CardFooter>
                                    <Button disabled={challenge.status !== 'Open'} className="w-full">
                                        <Hand className="mr-2 h-4 w-4" />
                                        Assign to Practitioner
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="roster" className="mt-6">
            <Card className="bg-secondary/20 text-foreground">
                <CardHeader>
                    <CardTitle className="text-foreground">AI Practitioner Roster</CardTitle>
                    <CardDescription>The current cohort of AI talent from the NTU SCTP Programme.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead><Users2 className="h-4 w-4 inline-block mr-2" />Name</TableHead>
                                <TableHead><Code className="h-4 w-4 inline-block mr-2" />Domain Expertise</TableHead>
                                <TableHead><Briefcase className="h-4 w-4 inline-block mr-2" />Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {incubatorMembers.map(member => (
                                <TableRow key={member.name}>
                                    <TableCell className="font-medium text-foreground">{member.name}</TableCell>
                                    <TableCell className="text-muted-foreground">{member.expertise}</TableCell>
                                    <TableCell><Badge variant="outline">Available</Badge></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Submission Detail Dialog */}
        <Dialog open={!!selectedSubmission} onOpenChange={(isOpen) => !isOpen && setSelectedSubmission(null)}>
            <DialogContent className="sm:max-w-2xl">
                {selectedSubmission && (
                    <>
                        <DialogHeader>
                            <DialogTitle className="text-foreground">{selectedSubmission.applicationType}</DialogTitle>
                            <DialogDescription>
                                Submitted by {selectedSubmission.submitterName} on {format(new Date(selectedSubmission.submissionDate), "PPP")}
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4 max-h-[60vh] overflow-y-auto pr-6">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right">Status</Label>
                                <div className="col-span-3">
                                    <Select
                                        value={selectedSubmission.status}
                                        onValueChange={(value: Submission['status']) => handleUpdateSubmissionStatus(selectedSubmission.id, value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Set status..." />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="New">New</SelectItem>
                                            <SelectItem value="In Review">In Review</SelectItem>
                                            <SelectItem value="Challenge Created">Challenge Created</SelectItem>
                                            <SelectItem value="Archived">Archived</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 items-start gap-4">
                                <Label className="text-right pt-2">Submitter</Label>
                                <div className="col-span-3 space-y-1">
                                    <p className="text-foreground">{selectedSubmission.submitterName}</p>
                                    <p className="text-foreground">{selectedSubmission.contactEmail}</p>
                                    <p className="text-foreground">{selectedSubmission.contactPhone}</p>
                                </div>
                            </div>
                             {selectedSubmission.companyName && (
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="companyName" className="text-right">Company</Label>
                                    <p className="col-span-3 text-foreground">{selectedSubmission.companyName}</p>
                                </div>
                            )}
                             {selectedSubmission.visionPitch && (
                                <div className="grid grid-cols-4 items-start gap-4">
                                    <Label className="text-right pt-2">Vision/Interest</Label>
                                    <Textarea readOnly value={selectedSubmission.visionPitch} className="col-span-3 bg-muted text-foreground" rows={6}/>
                                </div>
                            )}
                             {selectedSubmission.partnershipInterest && (
                                <div className="grid grid-cols-4 items-start gap-4">
                                    <Label className="text-right pt-2">Partnership Interest</Label>
                                    <Textarea readOnly value={selectedSubmission.partnershipInterest} className="col-span-3 bg-muted text-foreground" rows={6}/>
                                </div>
                            )}
                             {selectedSubmission.message && (
                                <div className="grid grid-cols-4 items-start gap-4">
                                    <Label className="text-right pt-2">Message</Label>
                                    <Textarea readOnly value={selectedSubmission.message} className="col-span-3 bg-muted text-foreground" rows={6}/>
                                </div>
                            )}
                             {selectedSubmission.portfolioUrl && (
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label className="text-right">Portfolio</Label>
                                    <a href={selectedSubmission.portfolioUrl} target="_blank" rel="noreferrer noopener" className="col-span-3 text-primary hover:underline truncate">{selectedSubmission.portfolioUrl}</a>
                                </div>
                            )}
                             {selectedSubmission.resumeUrl && (
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label className="text-right">Resume</Label>
                                    <a href={selectedSubmission.resumeUrl} target="_blank" rel="noreferrer noopener" className="col-span-3 text-primary hover:underline truncate">{selectedSubmission.resumeUrl}</a>
                                </div>
                            )}
                        </div>
                        <DialogFooter className="gap-2">
                             <Button variant="outline" onClick={() => handleCopyPrompt(selectedSubmission)}>
                                <Copy className="h-4 w-4 mr-2"/> Copy Analysis Prompt
                            </Button>
                             <Button onClick={() => handleGenerateProposal(selectedSubmission)} disabled={isGenerating}>
                                {isGenerating ? <Loader2 className="h-4 w-4 mr-2 animate-spin"/> : <Sparkles className="h-4 w-4 mr-2"/>}
                                Engage Strategist
                            </Button>
                            <Button variant="secondary" onClick={() => setSelectedSubmission(null)}>Close</Button>
                        </DialogFooter>
                    </>
                )}
            </DialogContent>
        </Dialog>

    </div>
  );
}

function PartnerDashboard() {
    const { user } = useUser();
    return (
    <div className="space-y-8">
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold text-foreground">Incubator Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, {user?.displayName || 'Partner'}.</p>
            </div>
            <Users2 className="h-10 w-10 text-primary" />
        </div>
        <Tabs defaultValue="roster" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="roster">Roster</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
          </TabsList>
          <TabsContent value="roster" className="mt-6">
            <Card className="bg-secondary/20 text-foreground">
                <CardHeader>
                    <CardTitle className="text-foreground">AI Practitioner Roster</CardTitle>
                    <CardDescription>The current cohort of AI talent from the NTU SCTP Programme.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead><Users2 className="h-4 w-4 inline-block mr-2" />Name</TableHead>
                                <TableHead><Code className="h-4 w-4 inline-block mr-2" />Domain Expertise</TableHead>
                                <TableHead><Briefcase className="h-4 w-4 inline-block mr-2" />Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {incubatorMembers.map(member => (
                                <TableRow key={member.name}>
                                    <TableCell className="font-medium text-foreground">{member.name}</TableCell>
                                    <TableCell className="text-muted-foreground">{member.expertise}</TableCell>
                                    <TableCell><Badge variant="outline">Available</Badge></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="challenges" className="mt-6 space-y-6">
             <Card className="bg-secondary/20 text-foreground">
                <CardHeader>
                    <CardTitle className="text-foreground">Incubator Challenges</CardTitle>
                    <CardDescription>A board of high-value business problems ready to be matched with AI practitioners.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {challenges.map(challenge => (
                            <Card key={challenge.id} className="bg-background flex flex-col text-foreground">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <CardTitle className="text-lg text-foreground">{challenge.title}</CardTitle>
                                        <Badge variant={getStatusVariant(challenge.status)}>{challenge.status}</Badge>
                                    </div>
                                    <CardDescription>{challenge.domain}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-sm text-muted-foreground">{challenge.description}</p>
                                </CardContent>
                                <CardFooter>
                                    <Button disabled={challenge.status !== 'Open'} className="w-full">
                                        <Hand className="mr-2 h-4 w-4" />
                                        Assign to Practitioner
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
    </div>
  );
}

function AccessDenied() {
  const auth = useAuth();
  return (
    <div className="space-y-8">
        <Card className="border-destructive bg-destructive/10 text-foreground">
          <CardHeader>
             <div className="flex items-center gap-4">
                <ShieldAlert className="h-8 w-8 text-destructive" />
                <div>
                    <CardTitle className="text-foreground">Access Denied</CardTitle>
                    <CardDescription>Your account does not have sufficient privileges.</CardDescription>
                </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This area is restricted. If you believe you should have access, please contact an administrator.
            </p>
            <Button variant="destructive" className="mt-4" onClick={() => auth?.signOut()}>Sign Out</Button>
          </CardContent>
        </Card>
        
        <Card className="bg-secondary/20 text-foreground">
            <CardHeader>
                <CardTitle className="text-foreground">First-Time Admin/Partner Setup</CardTitle>
                <CardDescription>Is this your first time setting up an admin or partner account?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-muted-foreground">For security, the first accounts must be assigned manually. This is a one-time process.</p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Make sure you have signed in here at least once with your Google account.</li>
                    <li>Go to your project's <span className="font-semibold text-foreground">Firebase Console</span>.</li>
                    <li>Navigate to <span className="font-semibold text-foreground">Firestore Database</span>.</li>
                    <li>In the `users` collection, find the document with your email address.</li>
                    <li>Edit that document and change the `role` field from `"user"` to `"admin"` or `"partner"`, as appropriate.</li>
                </ol>
                <p className="text-sm text-muted-foreground">After completing these steps, refresh this page. This manual step ensures that only the project owner can create the first privileged accounts.</p>
            </CardContent>
        </Card>
    </div>
  );
}

function AdminSignIn() {
    const auth = useAuth();
    const firestore = useFirestore();

    const handleGoogleSignIn = async () => {
        if (!auth || !firestore) return;
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            
            const userRef = doc(firestore, 'users', user.uid);
            await setDoc(userRef, {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                role: 'user' 
            }, { merge: true });

        } catch (error: any) {
             if (error.code === 'not-found') {
                const user = (await signInWithPopup(auth, provider)).user;
                const userRef = doc(firestore, 'users', user.uid);
                await setDoc(userRef, {
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    role: 'user'
                });
            } else {
                console.error("Error during Google sign-in:", error);
            }
        }
    };

    return (
        <Card className="max-w-md mx-auto bg-card text-card-foreground">
            <CardHeader className="text-center">
                <CardTitle className="text-foreground">Dashboard Access</CardTitle>
                <CardDescription>Sign in to access the Eve Count dashboard.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button className="w-full" onClick={handleGoogleSignIn}>
                    Sign in with Google
                </Button>
            </CardContent>
        </Card>
    );
}

export default function AdminPage() {
    const { user, isUserLoading } = useUser();
    const firestore = useFirestore();

    const userProfileRef = useMemoFirebase(() => {
        if (!firestore || !user) return null;
        return doc(firestore, 'users', user.uid);
    }, [firestore, user]);

    const { data: userProfile, isLoading: isProfileLoading } = useDoc<UserProfile>(userProfileRef);

    const renderContent = () => {
        if (isUserLoading || (user && isProfileLoading)) {
            return <div className="flex justify-center items-center h-40"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
        }

        if (!user) {
            return <AdminSignIn />;
        }
        
        if (userProfile) {
            if (userProfile.role === 'admin') {
                return <AdminDashboard />;
            }
            if (userProfile.role === 'partner') {
                return <PartnerDashboard />;
            }
        }
        
        return <AccessDenied />;
    };

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-16 md:py-24">
                <div className="container">
                    {renderContent()}
                </div>
            </main>
            <Footer />
        </div>
    );
}
