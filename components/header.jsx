import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const header = () => {
  return (
    <div className="p-4 bg-gray-900 text-white flex justify-end">
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  )
}

export default header