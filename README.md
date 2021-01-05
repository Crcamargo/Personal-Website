# Cristian's Personal Website

## Overview

This webapp was created to showcase my personal goals and projects while also being a fun web application that I can use as a sandbox where I can practice implementing new ideas.

## UI

The UI is built using React and uses Redux for state management. It POST's user activity events to the backend Node server. It connects to a read-only Firestore DB where it reads web application analytics data such as page views and resume downloads (more complex analytics is a next step)

## Function

The backend Node server is hosted in a Google Cloud Function and serves the UI and writes user activity events to Firestore. It keeps track of aggregated data using distributed counters in Firestore.
