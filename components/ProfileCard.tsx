import { Card, CardBody, CardFooter, CardHeader, Tooltip, Typography } from '@material-tailwind/react'

export interface Participant {
  id: 1
  full_name: 'Natalie Paisley'
  age: '26'
  email: 'natalie@gmail.com'
  gender: 'Female'
  teacher: 'Nikhil Warke'
  avatar_url: '/img/team-3.jpg'
}

export default function Example({ profile }: { profile: Participant }) {
  const { full_name, age, email, gender, teacher, avatar_url } = profile
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src={avatar_url} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {full_name}
        </Typography>
        <div className="flex items-center justify-between py-3">
          <Typography color="blue" className="font-medium" textGradient>
            {age} Years
          </Typography>
          <Typography color="blue" className="font-medium" textGradient>
            {email}
          </Typography>
          <Typography color="blue" className="font-medium" textGradient>
            {gender}
          </Typography>
        </div>
        <div className="flex items-center py-3">
          <Typography className="mr-3 font-medium font-bold">Recommending Teacher:</Typography>
          <Typography color="blue" className="font-medium" textGradient>
            {teacher}
          </Typography>
        </div>
      </CardBody>
      {/* <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography as="a" href="#facebook" variant="lead" color="blue" textGradient>
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography as="a" href="#twitter" variant="lead" color="light-blue" textGradient>
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography as="a" href="#instagram" variant="lead" color="purple" textGradient>
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter> */}
    </Card>
  )
}
