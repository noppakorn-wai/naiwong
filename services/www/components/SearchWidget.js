import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, InputGroup } from 'react-bootstrap'

const SearchWidget = ({ keyword, onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <InputGroup>
      <Form.Control
        type="text"
        name="keyword"
        placeholder="ค้นหา ร้านอาหาร"
        defaultValue={keyword}
      />
      <InputGroup.Append>
        <Button type="submit">ค้นหา</Button>
      </InputGroup.Append>
    </InputGroup>
  </Form>
)

SearchWidget.propTypes = {
  keyword: PropTypes.string,
  onSubmit: PropTypes.func,
}

export default SearchWidget
