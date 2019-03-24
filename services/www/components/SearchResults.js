import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { Card, Col, Row } from 'react-bootstrap'

const SearchResults = ({ results }) =>
  results.map(({ id, name, formattedAddress }) => (
    <Row
      key={id}
      css={css`
        margin-bottom: 32px;
      `}
    >
      <Col md={2} />
      <Col md={8}>
        <Card>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{formattedAddress}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={2} />
    </Row>
  ))

SearchResults.propTypes = {
  results: PropTypes.array,
}

SearchResults.defaultProps = {
  results: [],
}

export default SearchResults
