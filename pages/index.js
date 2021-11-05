import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import Link from 'next/link'

export default function Home() {

  
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"/>
          <Profile>
            <Name>Manas Shukla</Name>
            <UserImage
              src="https://avatars.githubusercontent.com/u/78421038?v=4"
            />
          </Profile>
        </Header>
        <ActionButtons>
        <Link href="/search">
          <ActionButton>
          <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
            Ride
          </ActionButton>
          </Link>
          <ActionButton>
          <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
          <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>
          Where To
        </InputButton>
      </ActionItems>
    </Wrapper>
  )
}


const Wrapper = tw.div`
flex flex-col h-screen
`

const ActionItems = tw.div`
flex-1
p-4
`

const Header = tw.div`
flex 
justify-between
items-center
`

const Profile = tw.div`
flex
items-center
`

const UberLogo = tw.img`
h-28
`
const Name = tw.h1`
mr-4 w-28
`

const UserImage = tw.img`
h-16
w-16
rounded-full
border-2
border-gray-500
p-px
`

const ActionButtons = tw.div`
flex

`
const ActionButton = tw.div`
flex
flex-col
justify-center
bg-gray-200
flex-1
m-1
h-32
items-center
rounded-lg
transform hover:scale-105
transition text-xl
`

const ActionButtonImage = tw.img`
h-3/5
`

const InputButton = tw.div`
h-20
bg-gray-200
text-xl
flex
items-center
mt-8
pl-8
rounded-full
`