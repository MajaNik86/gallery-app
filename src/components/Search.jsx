import { useDispatch, useSelector } from "react-redux";
import { getGalleries, setSearchTerm } from "../store/galleries/slice";
import { selectSearchTerm, selectSearchUserId, } from "../store/galleries/selector";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Search() {
    const dispatch = useDispatch();

    const term = useSelector(selectSearchTerm);

    const userId = useSelector(selectSearchUserId);

    function handleChangeSearchTerm(event) {
        dispatch(setSearchTerm(event.target.value));
    }

    function handleSearch() {
        dispatch(getGalleries({page: 1, term: term, userId: userId}));
    }

    return (

        <InputGroup style={{
        alignItems: "center",
        width: "40%"}} >
        <Form.Control
          placeholder="Search..."
          aria-describedby="basic-addon2"
          onChange={handleChangeSearchTerm}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={handleSearch} >
          Search
        </Button>
      </InputGroup>
    
    );
}