import { useGlobalContext } from './my-global-context'
const Home = () => {
const { copy } = useGlobalContext()
return <div>{copy}</div>
}
export default Home