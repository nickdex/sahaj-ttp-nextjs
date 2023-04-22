import TeacherFormComponent from '@/components/TeacherForm'

export default function TeacherForm() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row flex-wrap py-4  justify-center">
        <main role="main" className="w-full sm:w-2/3 md:w-3/4 mt-10  flex content-center justify-center">
          <TeacherFormComponent />
        </main>
      </div>
    </div>
  )
}
