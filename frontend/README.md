# LinkedIn OAuth Project

A Next.js application with LinkedIn OAuth authentication.

## Features
- LinkedIn OAuth 2.0 Login
- User Profile Display
- Redux State Management

## Vercel Deployment

### 1. Deploy from GitHub
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository: `Riturajkumarsingh/linkedin-oauth-project`
4. Set **Root Directory** to `frontend`
5. Add Environment Variables:
   - `LINKEDIN_CLIENT_ID` = your LinkedIn Client ID
   - `LINKEDIN_CLIENT_SECRET` = your LinkedIn Client Secret
   - `NEXT_PUBLIC_LINKEDIN_CLIENT_ID` = your LinkedIn Client ID
   - `NEXT_PUBLIC_REDIRECT_URI` = `https://your-app.vercel.app/auth/linkedin/callback`
6. Click Deploy!

### 2. Update LinkedIn App Settings
After deployment, update your LinkedIn Developer App:
1. Go to [LinkedIn Developer Portal](https://www.linkedin.com/developers/apps)
2. Select your app
3. Go to **Auth** tab
4. Add your Vercel URL to **Authorized redirect URLs**:
   - `https://your-app.vercel.app/auth/linkedin/callback`

## Local Development

```bash
cd frontend
npm install
npm run dev
```

Create a `.env.local` file with:
```
LINKEDIN_CLIENT_ID=your_client_id
LINKEDIN_CLIENT_SECRET=your_client_secret
NEXT_PUBLIC_LINKEDIN_CLIENT_ID=your_client_id
NEXT_PUBLIC_REDIRECT_URI=http://localhost:3000/auth/linkedin/callback
```


