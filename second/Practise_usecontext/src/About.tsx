import { useGlobalContext } from './my-global-context'
const About = () => {
const { copy, setCopy } = useGlobalContext()
return(
   <>
    <button onClick={() => setCopy('This is a new copy')}>
      Click me! 
      copy : {copy};
    </button>
  </>
 )
}
export default About