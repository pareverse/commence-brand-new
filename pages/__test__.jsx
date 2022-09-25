import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Badge, Box, Button, Container, Divider, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, IconButton, Input, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Select, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tooltip, Tr, useColorMode, useDisclosure } from '@chakra-ui/react'
import { Sun } from 'react-feather'

const Test = () => {
	const { toggleColorMode } = useColorMode()
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<Container py={6}>
				<Stack direction="row" spacing={6}>
					<Button onClick={toggleColorMode}>Continue with Google</Button>
					<Button variant="outline" colorScheme="brand">
						Sign in
					</Button>
					<Button colorScheme="brand">Sign in</Button>
					<Button colorScheme="red">Sign in</Button>
					<Button colorScheme="orange">Sign in</Button>
					<Button colorScheme="yellow">Sign in</Button>
					<Button colorScheme="green">Sign in</Button>
					<Button colorScheme="indigo">Sign in</Button>
					<Button colorScheme="violet">Sign in</Button>
					<Button variant="outline">Sign in</Button>
					<Button variant="ghost">Sign in</Button>

					<Tooltip label="Switch to Light Mode">
						<IconButton variant="ghost" icon={<Sun size={18} />} />
					</Tooltip>

					<Avatar />
				</Stack>

				<Stack>
					<Heading size="lg" color="solid">
						Welcome to Next JS
					</Heading>
					<Heading size="lg" color="default">
						Welcome to Next JS
					</Heading>
					<Heading size="lg" color="muted">
						Welcome to Next JS
					</Heading>
					<Heading size="lg" color="disabled">
						Welcome to Next JS
					</Heading>
				</Stack>

				<Divider />

				<Menu>
					<MenuButton>Open Menu</MenuButton>

					<MenuList>
						<MenuItem>List 1</MenuItem>
						<MenuItem>List 2</MenuItem>
						<MenuItem>List 3</MenuItem>
						<MenuDivider />
						<MenuItem>Sign out</MenuItem>
					</MenuList>
				</Menu>

				<Stack mt={6} direction="row" spacing={6}>
					<Link>Dashboard</Link>
					<Link>Features</Link>
					<Link>Settings</Link>
				</Stack>

				<Accordion defaultIndex={[0]} allowMultiple>
					<AccordionItem>
						<AccordionButton>
							<Box flex="1" textAlign="left">
								Section 1 title
							</Box>
							<AccordionIcon />
						</AccordionButton>
						<AccordionPanel>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</AccordionPanel>
					</AccordionItem>

					<AccordionItem>
						<AccordionButton>
							<Box flex="1" textAlign="left">
								Section 1 title
							</Box>
							<AccordionIcon />
						</AccordionButton>
						<AccordionPanel>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</AccordionPanel>
					</AccordionItem>
				</Accordion>

				<Box py={6}>
					<TableContainer>
						<Table>
							<Thead>
								<Tr>
									<Th>#</Th>
									<Th>Company</Th>
									<Th>Employee</Th>
									<Th>Salary</Th>
									<Th>Status</Th>
									<Th>Actions</Th>
								</Tr>
							</Thead>

							<Tbody>
								{[...Array(5)].map((data, index) => (
									<Tr key={index}>
										<Td>{index}</Td>
										<Td>
											<Stack direction="row" align="center" spacing={3}>
												<Avatar size="sm" />
												<Text>ABC Company</Text>
											</Stack>
										</Td>
										<Td>Employee 1</Td>
										<Td>P25,000</Td>
										<Td>
											<Badge colorScheme="orange">Overtime</Badge>
										</Td>
										<Td>
											<Button variant="outline">Delete</Button>
										</Td>
									</Tr>
								))}
							</Tbody>
						</Table>
					</TableContainer>
				</Box>
				<Button onClick={onOpen}>Open Modal</Button>

				<Popover>
					<PopoverTrigger>
						<Button>Trigger</Button>
					</PopoverTrigger>
					<PopoverContent>
						<PopoverArrow />
						{/* <PopoverCloseButton /> */}
						<PopoverHeader>Confirmation!</PopoverHeader>
						<PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>

						<PopoverFooter>
							<Button>Submit</Button>
						</PopoverFooter>
					</PopoverContent>
				</Popover>

				<Box my={6}></Box>
				<Tooltip hasArrow label="Hey, I'm here!" aria-label="A tooltip">
					Hover me
				</Tooltip>
			</Container>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Add new Data</ModalHeader>

					<ModalBody>
						<Stack spacing={3}>
							<FormControl isRequired>
								<FormLabel>Email address</FormLabel>
								<Input type="email" placeholder="Email" />
							</FormControl>

							<FormControl isInvalid>
								<FormLabel>Password</FormLabel>
								<Input type="password" placeholder="Password" />
								<FormErrorMessage>Password is required!</FormErrorMessage>
							</FormControl>
						</Stack>
					</ModalBody>

					<ModalFooter>
						<Stack direction="row" spacing={3}>
							<Button type="submit" colorScheme="brand">
								Submit
							</Button>
							<Button onClick={onClose}>Cancel</Button>
						</Stack>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}

export default Test
