

interface propsType{
    name: string;
    age: number
}

export default function Home(props: propsType) {

    
  return (
    <>
    <div className='py-10 font-bold text-[35px] text-center'>Hey {props.name}, Welcome to this page</div>
    <p className='text-center'>Your age is {props.age} so you have eligible for vote</p>
    </>
  )
}
