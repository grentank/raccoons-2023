import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import { Form, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import PostItem from '../UI/PostItem';
import SearchIcon from '../UI/icons/SearchIcon';

export default function SearchPostPage() {
  const [searchedPosts, setSearchedPosts] = useState([]);
  const [searchedText, setSearchedText] = useState('');

  const handleSearch = (e) => setSearchedText(e.target.value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchedText.length > 0) {
        axios(`/api/post/search?text=${searchedText}`)
          .then((res) => setSearchedPosts(res.data))
          .catch(console.log);
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [searchedText]);

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <SearchIcon />
        </InputGroup.Text>
        <Form.Control
          value={searchedText}
          onChange={handleSearch}
          type="text"
          name="search"
          aria-describedby="basic-addon1"
          placeholder="Search"
          aria-label="Search"
        />
      </InputGroup>
      <Row className="mt-4">
        {searchedPosts.map((post) => (
          <PostItem user={null} post={post} key={post.id} />
        ))}
      </Row>
    </>
  );
}
