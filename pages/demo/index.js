import React, { Component } from 'react';
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import {
  Heading,
  Flex,
  Card,
  Text,
  Box,
  Button
} from 'rebass'
import {
  Label,
  Input
} from '@rebass/forms'
import Head from 'next/head'
import Link from 'next/link'

import theme from '../../theme.js'

const Page = styled.div`
  height: 100%;
  min-height: 100vh;
`;

const Brand = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  cursor: pointer;
`;

const BrandIcon = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(/static/sweetmenu-favicon.png);
  background-size: cover;
  background-position: center;
  margin-right: 8px;
`;

class Demo extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Page className="sweetmenu__page">
          <Global
            styles={{
              'body, html': {
                padding: 0,
                margin: 0,
                fontFamily: 'body'
              }
            }}
          />
          <Head>
            <title>Get a demo | Sweetmenu</title>
            <link rel="icon" type="image/png" href="/static/sweetmenu-favicon.png"/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <Box
            display="flex"
            height="64px"
            pl={[4,4,4,6]}
            pr={[4,4,4,6]}
            width="100vw"
            flexDirection="row"
            justifyContent="space-between"
            className="sweetmenu__nav"
            fontFamily="body"
            sx={{
              position: 'fixed',
              zIndex: 888,
            }}
            >
            <Link href="/">
              <Brand className="sweetmenu__nav--brand">
                <svg version="1.1"
                	 style={{ fill: 'white'}}
                	 x="0px" y="0px" width="144.2px" height="32px" viewBox="0 0 144.2 32">
                  <g>
                  	<path class="st0" d="M16,0c8.8,0,16,7.2,16,16c0,6.2-3.6,11.6-8.8,14.3v-4.2v-7V8.9c-5.1,0-5.6,17.2-5.6,17.2H21v5.1
                  		c-1.6,0.5-3.2,0.8-5,0.8c-1.2,0-2.4-0.1-3.5-0.4V21.1c1.9-0.4,3.3-2.1,3.3-4.1V9.8c0-0.5-0.4-0.9-0.9-0.9c-0.5,0-0.9,0.4-0.9,0.9
                  		V17c0,1-0.6,1.9-1.5,2.2V9.8c0-0.5-0.4-0.9-0.9-0.9s-0.9,0.4-0.9,0.9v9.4C9.8,18.9,9.2,18,9.2,17V9.8c0-0.5-0.4-0.9-0.9-0.9
                  		c-0.5,0-0.9,0.4-0.9,0.9V17c0,2,1.4,3.7,3.3,4.1v10C4.5,28.9,0,23,0,16C0,7.2,7.2,0,16,0z"/>
                  	<g>
                  		<path class="st0" d="M47.4,11.2L44.9,12c-0.1-0.5-0.3-1-0.8-1.4c-0.4-0.4-1-0.6-1.8-0.6c-0.7,0-1.2,0.2-1.6,0.5
                  			c-0.4,0.4-0.6,0.8-0.6,1.3c0,0.9,0.5,1.4,1.5,1.6l2,0.4c1.2,0.2,2.2,0.7,2.9,1.5c0.7,0.8,1,1.6,1,2.7c0,1.2-0.5,2.2-1.4,3.1
                  			c-0.9,0.9-2.2,1.3-3.7,1.3c-0.9,0-1.7-0.1-2.4-0.4c-0.7-0.3-1.3-0.6-1.7-1.1c-0.4-0.4-0.8-0.9-1-1.4c-0.2-0.5-0.4-1-0.4-1.5
                  			l2.5-0.7c0.1,0.8,0.4,1.4,0.9,1.9c0.5,0.5,1.3,0.8,2.2,0.8c0.7,0,1.3-0.2,1.7-0.5c0.4-0.3,0.6-0.7,0.6-1.3c0-0.4-0.1-0.8-0.4-1.1
                  			s-0.7-0.5-1.3-0.6l-2-0.4c-1.1-0.2-2-0.7-2.7-1.4c-0.7-0.7-1-1.6-1-2.6c0-1.2,0.5-2.3,1.4-3.1c1-0.8,2.1-1.3,3.5-1.3
                  			c0.8,0,1.5,0.1,2.2,0.3c0.6,0.2,1.1,0.5,1.5,0.9c0.4,0.4,0.7,0.8,0.9,1.2C47.1,10.4,47.3,10.8,47.4,11.2z"/>
                  		<path class="st0" d="M55,12.2h2.8l2.1,6.3l1.8-6.3h2.6L61.3,22h-2.6l-2.3-6.7L54.1,22h-2.7l-3.1-9.8H51l1.8,6.3L55,12.2z"/>
                  		<path class="st0" d="M72.3,18.5l2.2,0.7c-0.3,0.9-0.8,1.6-1.6,2.2c-0.8,0.6-1.7,0.9-2.9,0.9c-1.4,0-2.6-0.5-3.6-1.4
                  			c-1-0.9-1.5-2.2-1.5-3.8c0-1.5,0.5-2.8,1.4-3.7c1-1,2.1-1.4,3.4-1.4c1.5,0,2.7,0.5,3.6,1.4c0.9,0.9,1.3,2.1,1.3,3.7
                  			c0,0.1,0,0.2,0,0.4c0,0.1,0,0.2,0,0.3l0,0.1h-7c0,0.6,0.3,1.2,0.8,1.6c0.5,0.4,1,0.6,1.7,0.6C71.2,20,71.9,19.5,72.3,18.5z
                  			 M67.6,16H72c0-0.5-0.2-1-0.6-1.4c-0.4-0.4-0.9-0.6-1.6-0.6c-0.6,0-1.2,0.2-1.6,0.6C67.9,15,67.7,15.5,67.6,16z"/>
                  		<path class="st0" d="M83.3,18.5l2.2,0.7c-0.3,0.9-0.8,1.6-1.6,2.2c-0.8,0.6-1.7,0.9-2.9,0.9c-1.4,0-2.6-0.5-3.6-1.4
                  			c-1-0.9-1.5-2.2-1.5-3.8c0-1.5,0.5-2.8,1.4-3.7c1-1,2.1-1.4,3.4-1.4c1.5,0,2.7,0.5,3.6,1.4c0.9,0.9,1.3,2.1,1.3,3.7
                  			c0,0.1,0,0.2,0,0.4c0,0.1,0,0.2,0,0.3l0,0.1h-7c0,0.6,0.3,1.2,0.8,1.6c0.5,0.4,1,0.6,1.7,0.6C82.2,20,82.9,19.5,83.3,18.5z
                  			 M78.7,16H83c0-0.5-0.2-1-0.6-1.4c-0.4-0.4-0.9-0.6-1.6-0.6c-0.6,0-1.2,0.2-1.6,0.6C78.9,15,78.7,15.5,78.7,16z"/>
                  		<path class="st0" d="M91,9.3v2.9h2v2.3h-2v4.1c0,0.4,0.1,0.7,0.3,0.9c0.2,0.2,0.5,0.3,0.9,0.3c0.4,0,0.6,0,0.8-0.1v2.2
                  			c-0.4,0.2-0.9,0.2-1.5,0.2c-1,0-1.7-0.3-2.3-0.8c-0.6-0.5-0.8-1.3-0.8-2.2v-4.6h-1.8v-2.3h0.5c0.5,0,0.9-0.1,1.1-0.4
                  			c0.3-0.3,0.4-0.7,0.4-1.1V9.3H91z"/>
                  		<path class="st0" d="M97.7,22h-2.6v-9.8h2.5v1.2c0.3-0.5,0.7-0.8,1.2-1.1c0.5-0.3,1.1-0.4,1.7-0.4c1.4,0,2.4,0.5,2.9,1.6
                  			c0.7-1.1,1.7-1.6,3.1-1.6c1,0,1.8,0.3,2.5,0.9c0.7,0.6,1,1.6,1,2.8V22h-2.6v-5.8c0-0.6-0.1-1-0.4-1.3c-0.3-0.3-0.7-0.5-1.3-0.5
                  			c-0.5,0-1,0.2-1.3,0.6c-0.3,0.4-0.5,0.8-0.5,1.4V22h-2.6v-5.8c0-0.6-0.1-1-0.4-1.3c-0.3-0.3-0.7-0.5-1.3-0.5c-0.6,0-1,0.2-1.3,0.5
                  			c-0.3,0.4-0.5,0.8-0.5,1.4V22z"/>
                  		<path class="st0" d="M119.3,18.5l2.2,0.7c-0.3,0.9-0.8,1.6-1.6,2.2c-0.8,0.6-1.7,0.9-2.9,0.9c-1.4,0-2.6-0.5-3.6-1.4
                  			c-1-0.9-1.5-2.2-1.5-3.8c0-1.5,0.5-2.8,1.4-3.7c1-1,2.1-1.4,3.4-1.4c1.5,0,2.7,0.5,3.6,1.4c0.9,0.9,1.3,2.1,1.3,3.7
                  			c0,0.1,0,0.2,0,0.4c0,0.1,0,0.2,0,0.3l0,0.1h-7c0,0.6,0.3,1.2,0.8,1.6c0.5,0.4,1,0.6,1.7,0.6C118.2,20,118.9,19.5,119.3,18.5z
                  			 M114.7,16h4.4c0-0.5-0.2-1-0.6-1.4c-0.4-0.4-0.9-0.6-1.6-0.6c-0.6,0-1.2,0.2-1.6,0.6C114.9,15,114.7,15.5,114.7,16z"/>
                  		<path class="st0" d="M126.4,16.4V22h-2.6v-9.8h2.6v1.2c0.3-0.5,0.7-0.8,1.2-1.1c0.5-0.3,1.1-0.4,1.6-0.4c1.2,0,2,0.4,2.6,1.1
                  			c0.6,0.7,0.9,1.7,0.9,2.8V22H130v-5.7c0-0.6-0.1-1.1-0.4-1.4c-0.3-0.4-0.8-0.5-1.4-0.5c-0.6,0-1,0.2-1.3,0.6
                  			C126.6,15.3,126.4,15.8,126.4,16.4z"/>
                  		<path class="st0" d="M141.7,22c-0.1-0.3-0.1-0.6-0.1-1.1c-0.3,0.4-0.6,0.8-1.1,1c-0.5,0.2-1,0.3-1.6,0.3c-1.2,0-2.1-0.4-2.7-1.1
                  			c-0.7-0.7-1-1.7-1-2.8v-6.2h2.6v5.7c0,0.6,0.2,1.1,0.5,1.4c0.3,0.4,0.7,0.5,1.3,0.5c0.6,0,1-0.2,1.4-0.5c0.3-0.4,0.5-0.8,0.5-1.4
                  			v-5.7h2.6v8c0,0.6,0,1.2,0.1,1.8H141.7z"/>
                  	</g>
                  </g>
                </svg>
              </Brand>
            </Link>
            <Box
              display="flex"
              flexDirection="row nowrap"
              alignItems="center"
            >
              <Text
                fontSize={1}
                color="primary"
                mr=".5rem"
                fontFamily="body"
              >
                Questions?
              </Text>
              <a href="mailto:chris@sweetmenu.co">
                <Button
                  p=".5rem 1rem"
                  fontWeight="bold"
                  bg="primary"
                  color="white"
                  fontSize={1}
                >
                  Email Chris
                </Button></a>
            </Box>
          </Box>
          <Flex
            flexDirection={['column', 'column', 'column', 'row']}
            alignItems="stretch"
            justifyContent="flex-start"
            height="100%"
            minHeight="100vh"
            fontFamily="body"
          >
            <Box
              display="flex"
              flex="1"
              flexDirection="column"
              justifyContent="center"
              p={[4,4,4,6]}
              pt="80px"
              pb="80px"
              bg="primary"
              className="sweetmenu__aside">
              <Heading
                fontSize={[ 5, 5, 6 ]}
                color='white'
                fontFamily="inherit"
                mb={2}
                className="sweetmenu__aside--title">
                Seeing is believing
              </Heading>
              <Text
                color="white"
                fontSize={[2,2, 3]}
                className="sweetmenu__aside--caption">
                We could go on and on about how Sweetmenu can transform your restaurant's website. But we don't want you to have to take our word for it.
                <br/>
                <br/>
                So fill out the form and you can see for yourself, risk-free, exactly how revolutionary Sweetmenu is.
              </Text>
            </Box>
            <Box
              display="flex"
              flex={['initial', 'initial', 'initial', 1]}
              flexDirection="column"
              justifyContent="center"
              alignItems="stretch"
              p={[4,4,4,6]}
              className="sweetmenu__form">
              <form method="post" data-netlify="true" data-netlify-honeypot="bot-field" name="demo">
                <input type="hidden" name="form-name" value="demo" />
                <input type="hidden" name="bot-field" />
                <Box
                  mb={3}
                  className="sweetmenu__form--inputGroup">
                  <Label
                    mb={2}
                    fontWeight="bold"
                    htmlFor="fullName"
                    className="sweetmenu__form--inputLabel">
                    Full name
                  </Label>
                  <Input
                    autoFocus
                    required
                    bg="#efefef"
                    sx={{
                      borderRadius: "4px",
                      border: 0
                    }}
                    p={3}
                    placeholder="Thomas Keller"
                    type="text"
                    name="fullName" />
                </Box>
                <Box
                  mb={3}
                  className="sweetmenu__form--inputGroup">
                  <Label
                    mb={2}
                    fontWeight="bold"
                    htmlFor="email"
                    className="sweetmenu__form--inputLabel">
                    Email
                  </Label>
                  <Input
                    required
                    bg="#efefef"
                    sx={{
                      borderRadius: "4px",
                      border: 0
                    }}
                    p={3}
                    placeholder="tkeller@thefrenchlaundry.com"
                    type="email"
                    name="email" />
                </Box>
                <Box
                  mb={3}
                  className="sweetmenu__form--inputGroup">
                  <Label
                    mb={2}
                    fontWeight="bold"
                    htmlFor="restaurant"
                    className="sweetmenu__form--inputLabel">
                    Restaurant
                  </Label>
                  <Input
                    required
                    bg="#efefef"
                    sx={{
                      borderRadius: "4px",
                      border: 0
                    }}
                    p={3}
                    placeholder="The French Laundry"
                    type="text"
                    name="restaurant" />
                </Box>
                <Box
                  mb={3}
                  className="sweetmenu__form--inputGroup">
                  <Label
                    mb={2}
                    fontWeight="bold"
                    htmlFor="website"
                    className="sweetmenu__form--inputLabel">
                    Website
                  </Label>
                  <Input
                    required
                    bg="#efefef"
                    sx={{
                      borderRadius: "4px",
                      border: 0
                    }}
                    p={3}
                    placeholder="https://thefrenchlaundry.com"
                    type="url"
                    name="website" />
                </Box>
                <Box
                  className="sweetmenu__form--submitGroup">
                  <Input
                    display="inline-flex"
                    bg="primary"
                    color="white"
                    width="initial"
                    fontWeight="bold"
                    p="1rem 1.5rem"
                    sx={{
                      float: 'right',
                      borderRadius: '4px'
                    }}
                    type="submit"
                    value="Request demo" className="sweetmenu__form--submit">
                  </Input>
                </Box>
              </form>
            </Box>
          </Flex>
        </Page>
      </ThemeProvider>
    );
  }

}

export default Demo;
