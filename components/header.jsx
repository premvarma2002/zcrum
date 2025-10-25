import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

const header = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton/>
      </SignedOut>

      <SignedIn>
        <UserButton/>
      </SignedIn>
    </div>
  )
}

export default header