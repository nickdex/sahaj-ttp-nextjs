import { Card, Input, Checkbox, Button, Typography, Select, Option } from '@material-tailwind/react'
import Link from 'next/link'

export default function TeacherFormComponent() {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" />
          <Input size="lg" label="Age" />
          <Input size="lg" label="Email" />
          <Input size="lg" label="Gender" />
          <Select label="Select Recomeding Teacher">
            {['Nikhil', 'Kshitij'].map((teacherName, index) => {
              return <Option key={index}>{teacherName}</Option>
            })}
          </Select>
        </div>
        <Checkbox
          label={
            <Typography variant="small" color="gray" className="flex items-center font-normal">
              I agree the
              <a href="#" className="font-medium transition-colors hover:text-blue-500">
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: '-ml-2.5' }}
        />
        <Link href="/participant-detail">
          <Button className="mt-6" fullWidth>
            Register
          </Button>
        </Link>
      </form>
    </Card>
  )
}
