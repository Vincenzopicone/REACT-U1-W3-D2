/* import { useEffect, useState } from 'react' */
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Form, Spinner, Alert} from 'react-bootstrap'
import Job from './Job'
import { getJobs, /* SAVE_JOB, */ SEARCH_JOB } from '../redux/actions'


const MainSearch = () => {
/*   const [query, setQuery] = useState("") */
  /* const [jobs, setJobs] = useState([]) */
  const dispatch = useDispatch()
  const setJobs = useSelector(state =>state.search.job)
  const searchJob = useSelector(state => state.search.search)
  const isLoading = useSelector (state=> state.app.loading)
  const isError = useSelector(state=> state.app.msgError)
  const setError = useSelector(state => state.app.error)

  

  const handleChange = (e) => {
   /*  setQuery(e.target.value) */
   dispatch({type: SEARCH_JOB, payload: e.target.value})
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(getJobs(searchJob))
       /* try {
      const response = await fetch(baseEndpoint + query + '&limit=20')
      if (response.ok) {
        const { data } = await response.json()
       ///// setJobs(data)
       dispatch ({type: SAVE_JOB, payload: data})
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    } */
  }

/*   useEffect(()=>{
   )
  },[]) */

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
            /*   value={query} */
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          <div className='d-flex justify-content-center align-items-center p-3'>
          {isLoading && (<Spinner animation="border" variant="primary" />)}
          {setError && (<Alert variant='danger'>{isError}</Alert> )}
          </div>
          {setJobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
