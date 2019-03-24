import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import axios from 'axios'
import styled from '@emotion/styled'
import Head from 'next/head'
import { withRouter } from 'next/router'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import SearchWidget from 'www/components/SearchWidget'
import SearchResults from 'www/components/SearchResults'

const HeroContentContainer = styled(Container)`
  min-height: calc(100vh - 66px);
  padding: 32px 0;
  > h2,
  > p {
    text-align: center;
    color: white;
    font-weight: bold;
    margin-bottom: 16px;
  }
`

const HomePage = ({ router }) => {
  const keyword = router.query.keyword || 'Bangsue'
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    async function fetchResult() {
      setIsLoading(true)
      this.minimumLoading = Number(new Date()) + 1.3 * 1000
      const {
        data: { results },
      } = await axios('/api/places', { params: { keyword } })
      let remainingTime = this.minimumLoading - Number(new Date())
      if (remainingTime <= 0) remainingTime = 0
      setTimeout(() => {
        setSearchResults(results)
        setIsLoading(false)
      }, remainingTime)
    }
    fetchResult()
  }, [keyword])
  const handleSearch = (e) => {
    if (e?.preventDefault) e.preventDefault()
    const nextKeyword = e?.target?.keyword?.value
    if (nextKeyword && nextKeyword !== keyword) {
      router.push(`/home?keyword=${nextKeyword}`, `/?keyword=${nextKeyword}`, { shallow: true })
    }
    return false
  }
  return (
    <>
      <Head>
        <title>Naiwong: ค้นหาร้านอาหารที่ถูกใจคุณ</title>
        <style
          /* eslint-disable react/no-danger */
          dangerouslySetInnerHTML={{
            __html: `
              body { background: black; }
            `,
          }}
          /* eslint-enable react/no-danger */
        />
      </Head>
      <div
        css={css`
          min-height: calc(100vh - 66px);
          ::before {
            content: ' ';
            z-index: -1;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-image: url('/static/hero-image.jpg');
            background-size: cover;
            background-position: top center;
            background-repeat: no-repeat;
          }
          ::after {
            content: ' ';
            z-index: -1;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            margin: 0;
            padding: 30px 0;
            background-image: linear-gradient(to bottom, transparent, black);
          }
        `}
      >
        <HeroContentContainer>
          <h2>ค้นหาร้านอาหารที่ถูกใจคุณ</h2>
          <Row>
            <Col md={2} />
            <Col xs={12} md={8}>
              <SearchWidget keyword={keyword} onSubmit={handleSearch} />
            </Col>
          </Row>
          <br />
          {isLoading ? (
            <Spinner
              animation="grow"
              variant="white"
              css={css`
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
              `}
            />
          ) : (
            <>
              <p>{`ค้นพบ ${searchResults.length} ผลการค้นหา`}</p>
              <SearchResults results={searchResults} />
            </>
          )}
        </HeroContentContainer>
      </div>
    </>
  )
}

HomePage.propTypes = {
  router: PropTypes.object,
}

export default withRouter(HomePage)
