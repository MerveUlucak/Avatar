import Image from 'next/image'

// Avatar bileşeni
function Avatar({ imageSrc, name, profileText }) {
  return (
    <div className="group block p-8 flex-shrink-0">
      <div className="flex items-center">
        <div>
          <Image
            className="inline-block h-12 w-12 rounded-full"
            src={imageSrc}
            alt={`${name}'s profile picture`}
            width={48}
            height={48}
          />
        </div>
        <div className="ml-3">
          <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
            {name}
          </p>
          <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
            {profileText}
          </p>
        </div>
      </div>
    </div>
  )
}

// App bileşeni
export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Avatar
        imageSrc="/photo.png"
        name="Tom Cook"
        profileText="Profile bakın"
      />
      <Avatar
        imageSrc="/photo.png"
        name="John Cook"
        profileText="Profile bakın"
      />
    </div>
  )
}
