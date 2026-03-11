export default function ProfileCard({user}:any){

return(

<div className="bg-white shadow-xl p-8 rounded-2xl w-96">

{/* LinkedIn Icon */}
<div className="flex justify-center mb-4">
  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
</div>

{/* Profile Picture */}
<img
src={user.picture}
alt={user.name}
className="w-28 h-28 rounded-full mx-auto border-4 border-blue-500 shadow-lg"
/>

{/* Name */}
<h2 className="text-2xl font-bold mt-4 text-center text-gray-800">
{user.name}
</h2>

{/* First & Last Name */}
{(user.given_name || user.family_name) && (
<p className="text-center text-gray-500 text-sm">
  {user.given_name} {user.family_name}
</p>
)}

{/* Email */}
<div className="mt-4 flex items-center justify-center gap-2">
  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
  <p className="text-gray-600">{user.email}</p>
</div>

{/* Email Verified Badge */}
{user.email_verified && (
  <div className="mt-2 flex justify-center">
    <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full flex items-center gap-1">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      Email Verified
    </span>
  </div>
)}

{/* Locale */}
{user.locale && (
  <div className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-500">
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>Locale: {user.locale?.language || user.locale}</span>
  </div>
)}

{/* LinkedIn ID */}
{user.sub && (
<div className="mt-4 pt-4 border-t border-gray-200">
  <p className="text-xs text-gray-400 text-center">
    LinkedIn ID: {user.sub}
  </p>
</div>
)}

</div>

)

}