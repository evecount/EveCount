# Firebase App Hosting - Rollout Note

**Date:** July 20, 2026
**Issue:** Firebase App Hosting Rollout Error on static Vite stack.

## The Error
During the initial deployment of the static Vite/React branch to Firebase App Hosting, the rollout failed with the following error:

> `generic::failed_precondition: The user-provided container failed to start and listen on the port defined provided by the PORT=8080 environment variable within the allocated timeout.`

## The Cause
Firebase **App Hosting** is designed for full-stack, server-rendered frameworks (like Next.js or Angular) that natively spin up a server and listen on a port (like `8080`). 

Because we pushed the temporary static Vite app (`EveCount`), it didn't have an active Node server listening on that port—it just output static HTML/CSS files to a `dist` folder. App Hosting spun up a container, waited for a server to start on port 8080, and timed out.

## The Solution (When we return to this project)
When we are ready to resume work on `evecount.com`, we will simply push **this** Next.js repository (`evecount_repo`) to GitHub and overwrite the Vite app. 

Because this repository is built on **Next.js 15**, Firebase App Hosting will natively recognize it, build the SSR backend, and successfully bind to PORT 8080 without timing out. The deployment will succeed automatically.
