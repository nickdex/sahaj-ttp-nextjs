import ProfileCard from '@/components/ProfileCard'
import { Button } from '@material-tailwind/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function TeacherForm() {
  //   const participants =
  //[
  //     {
  //       id: 1,
  //       fullName: 'Natalie Paisley',
  //       age: '26',
  //       email: 'natalie@gmail.com',
  //       gender: 'Female',
  //       teacherName: 'Nikhil Warke',
  //       avatar: '/img/team-3.jpg'
  //     },
  //     {
  //       id: 2,
  //       fullName: 'Natalie Paisley',
  //       age: '26',
  //       email: 'natalie@gmail.com',
  //       gender: 'Female',
  //       teacherName: 'Nikhil Warke',
  //       avatar:
  //         '/img/girl-1.jpeg'
  //     },
  //     {
  //       id: 3,
  //       fullName: 'Natalie Paisley',
  //       age: '26',
  //       email: 'natalie@gmail.com',
  //       gender: 'Female',
  //       teacherName: 'Nikhil Warke',
  //       avatar:
  //         '/img/girl-2.jpeg'
  //     }
  //   ]
  const [participants, setParticipants] = useState([
    {
      id: 1,
      fullName: 'Natalie Paisley',
      age: '26',
      email: 'natalie@gmail.com',
      gender: 'Female',
      teacherName: 'Nikhil Warke',
      avatar: '/img/team-3.jpg'
    }
  ])

  useEffect(() => {
    fetch(`/api/participant`)
      .then((result) => result.json())
      .then(setParticipants)
  }, [])
  const router = useRouter()
  return (
    <div className="container mx-auto">
      <div className="flex flex-row flex-wrap py-4  justify-center">
        <div>
          <Button onClick={() => router.back()}>Back</Button>
        </div>
        <main
          role="main"
          className="w-full sm:w-2/3 md:w-3/4 lg:w-full mt-10  flex content-center justify-center"
        >
          <div className="grid lg:grid-cols-3 gap-5">
            {participants.map((p) => {
              return <ProfileCard key={p.id} profile={p} />
            })}
          </div>
        </main>
      </div>
    </div>
  )
}
