              import React, { useState } from 'react';
                import Button from 'react-bootstrap/Button';
                import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
                import { Wrap, WrapItem } from "@chakra-ui/react";
                import './header.css';
                import { Stack } from "@chakra-ui/react";
                import { Code } from '@chakra-ui/react';
                import { HStack } from '@chakra-ui/react';
                import {
                  Tag,
                  TagLabel,
                  TagLeftIcon,
                  TagRightIcon,
                  TagCloseButton,
                  } from '@chakra-ui/react'
                import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

                const Header = () => {
                  return (
                    <>
                     
                      <Tabs colorScheme="teal">
                        <TabList>
                          <Tab>Home</Tab>
                          <Tab>Blog</Tab>
                          <Tab>Sla</Tab>
                        </TabList>
                        <TabPanels>
                          <TabPanel>
                            <Stack direction='row'>
                              <Avatar name='Oshigaki Kisame' src='https://bit.ly/broken-link' />
                              <Avatar name='Sasuke Uchiha' src='https://bit.ly/broken-link' />
                              <Avatar src='https://bit.ly/broken-link' />
                            </Stack>
                          </TabPanel>
                          <TabPanel>
                            <Stack direction='row'>
                              <Code children='console.log(welcome)' />
                              <Code colorScheme='red' children="var chakra = 'awesome!'" />
                              <Code colorScheme='yellow' children='npm install chakra' />
                            </Stack>
                          </TabPanel>
                          <TabPanel>
                            <HStack spacing={4}>
                              {['sm', 'md', 'lg'].map((size) => (
                                <Tag
                                  size={size}
                                  key={size}
                                  borderRadius='full'
                                  variant='solid'
                                  colorScheme='green'
                                >
                                  <TagLabel>Green</TagLabel>
                                  <TagCloseButton />
                                </Tag>
                              ))}
                            </HStack>
                          </TabPanel>
                        </TabPanels>
                      </Tabs>
                     <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
                        <div className="center">
                          <h1 className="text-primary">Infoweek</h1>
                        </div>
                      </header>
                      <nav style={{display: "flex", justifyContent: "center"}}>
                        <ul className="d-flex align-items-center list-unstyled">
                          <li><a href="#" className="text-dark">Home</a></li>
                          <li><a href="#" className="text-dark">Sobre</a></li>
                          <li><a href="#" className="text-dark">Contato</a></li>
                        </ul>
                      </nav>
                    </>
                  );
                };

                export default Header;
          