
## Getting Started

1.First for Initialize a Next.js project
Use the Following command

npx create-next-app@latest my-fullstack-app --typescript
cd my-fullstack-app

2.Install Tailwind CSS

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
and Configure in tailwind.config.js file

3.Create the Dockerfile for Containerization

docker build -t my-fullstack-app .
docker run -p 3000:3000 my-fullstack-app
Frontend is now running on http://localhost:3000.

4.Set up Google Cloud Functions

gcloud init
gcloud config set project [PROJECT_ID]

5.Deploy the Cloud Function:

firebase deploy --only functions

6.Start Docker container
 
docker run -p 3000:3000 my-fullstack-app

7. Setup the Google Cloud your project

gcloud projects list
gcloud config set project your-project-id

8.Finally Build Succesfully.

Open [http://localhost:3000] with your browser to see the result.



"# my-fullstack-app1" 
