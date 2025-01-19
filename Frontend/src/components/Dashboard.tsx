
import React, { useState } from 'react'
import mainLogo from '../assets/mainLogo.png'
import nameLogo from '../assets/nameLogo.png'
import profile1 from '../assets/profile1.png'
import profile2 from '../assets/profile2.png'
import profile3 from '../assets/profile3.png'
import profile4 from '../assets/profile4.png'
import profile5 from '../assets/profile5.png'
import Avatar from '@mui/material/Avatar'

import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Search,
  Image,
  FileText,
  Upload,
  Share2,
  Bell,
  File,
  Briefcase,
  Camera,
  Users,
  List,
  Home,
  Settings,
  HelpCircle,
  Github,
  Twitter,
  Linkedin,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import CustomSurplusAvatars from './CustomSurplusAvatars'



  const sidebarItems = [
    { title: 'Contracts', key: 'contracts' },
    { title: 'Projects', key: 'projects' },
    { title: 'Albums', key: 'albums' },
    { title: 'Organizations', key: 'organizations' }
  ];

 


interface SideMenuProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

const SideMenu: React.FC<SideMenuProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40"
          />

      

          {/* Side Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full md:w-80 bg-white z-50 shadow-xl"
          >
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">{title}</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-4 overflow-y-auto h-[calc(100vh-70px)]">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null)

     const toggleAccordion = (key: string) => {
       setActiveAccordion(activeAccordion === key ? null : key)
     }

  const menuItems = [
    { title: 'Contracts', key: 'contracts', icon: File },
    { title: 'Projects', key: 'projects', icon: Briefcase },
    { title: 'Albums', key: 'albums', icon: Camera },
    { title: 'Organizations', key: 'organizations', icon: Users },
    { title: 'Tasks', key: 'tasks', icon: List },
    { title: 'Followers', key: 'followers', icon: Users },
  ]

  const followers = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    src: `profile${index + 1}.png`
  }))

  const posts = Array.from({ length: 2 }, (_, index) => ({
    id: index + 1,
    userName: `User Name ${index + 1}`,
    content: 'Post content goes here...',
  }))

  const tasks = [
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
    { id: 3, title: 'Task 3' },
    { id: 4, title: 'Task 4' },
  ]

  const renderMenuContent = (key: string) => {
    switch (key) {
      case 'contracts':
        return (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Active Contracts</h3>
              <div className="space-y-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="bg-white p-3 rounded-md shadow-sm">
                    <p className="font-medium">Contract #{i + 1}</p>
                    <p className="text-sm text-gray-500">Due in {i + 5} days</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      case 'followers':
        return (
          <div className="grid grid-cols-2 gap-4">
            {followers.map((follower) => (
              <div
                key={follower.id}
                className="bg-gray-50 p-4 rounded-lg flex items-center gap-3"
              >
                <Avatar
                  key={follower.id}
                  alt="Remy Sharp"
                  src={`/src/assets/` + follower.src}
                />
           
                <div>
                  <p className="font-medium">{follower.name}</p>
                  <p className="text-sm text-gray-500">Following</p>
                </div>
              </div>
            ))}
          </div>
        )
      // Add more cases for other menu items
      default:
        return (
          <div className="text-center text-gray-500 py-8">
            Content for {key} will be added soon.
          </div>
        )
    }
  }

  // ... (previous component code remains the same until the end of the main content)

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold text-indigo-600">
                <img src={mainLogo} alt="mainLogo" className="h-8 w-8 cursor-pointer" />
              </div>
              <div className="hidden md:flex ml-10 space-x-8">
                <a className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md transition-colors cursor-pointer">
                  Home
                </a>
                <a className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md transition-colors cursor-pointer">
                  Explore
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                Upgrade
              </button>
              <button className="p-2 rounded-full bg-gray-100">
                <span className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">ME</span>
                </span>
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-4 py-3 space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.key}
                    onClick={() => {
                      setActiveMenu(item.key)
                      setIsMenuOpen(false)
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    {item.title}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Side Menu for each option */}
      {menuItems.map((item) => (
        <SideMenu
          key={item.key}
          isOpen={activeMenu === item.key}
          onClose={() => setActiveMenu(null)}
          title={item.title}
        >
          {renderMenuContent(item.key)}
        </SideMenu>
      ))}

      {/* Main Content */}
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4">
          {/* ... (previous main content code remains the same) ... */}
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-12 gap-6">
              {/* Sidebar */}
              <div className="hidden md:block md:col-span-3">
                <div className="bg-white rounded-lg shadow">
                  {sidebarItems.map((item) => (
                    <div key={item.key} className="border-b last:border-b-0">
                      <button
                        onClick={() => toggleAccordion(item.key)}
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-700">
                          {item.title}
                        </span>
                        {activeAccordion === item.key ? (
                          <ChevronUp className="h-5 w-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                      <AnimatePresence>
                        {activeAccordion === item.key && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 py-3 bg-gray-50">
                              <p className="text-sm text-gray-600">
                                Content for {item.title}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Followers Section */}
                <div className="mt-6 bg-white rounded-lg shadow p-4 ">
                  <h3 className="font-medium text-gray-700 mb-3">Followers</h3>
                  <CustomSurplusAvatars />
                </div>
              </div>

              {/* Main Content */}
              <div className="col-span-12 md:col-span-6">
                {/* Search Bar */}
                <div className="bg-white rounded-lg shadow mb-6">
                  <div className="p-4">
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="Search"
                          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                        Post
                      </button>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <button className="flex items-center gap-1 px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors">
                        <Image className="h-4 w-4" />
                        <span className="text-sm">Images</span>
                      </button>
                      <button className="flex items-center gap-1 px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors">
                        <FileText className="h-4 w-4" />
                        <span className="text-sm">Docs</span>
                      </button>
                      <button className="flex items-center gap-1 px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors">
                        <Upload className="h-4 w-4" />
                        <span className="text-sm">Import</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Posts */}
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-lg shadow mb-6"
                  >
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-gray-200">
                            <Avatar alt="Remy Sharp" src={profile5} />
                          </div>
                          <div>
                            <h3 className="font-medium">{post.userName}</h3>
                            <p className="text-sm text-gray-500">Info</p>
                          </div>
                        </div>
                        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                          <Share2 className="h-5 w-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-600">{post.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Sidebar */}
              <div className="hidden md:block md:col-span-3">
                <div className="bg-white rounded-lg shadow">
                  <div className="p-4">
                    <h3 className="font-medium text-gray-700 mb-3">Tasks</h3>
                    <div className="space-y-2">
                      {tasks.map((task) => (
                        <div
                          key={task.id}
                          className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                        >
                          <span className="text-sm text-gray-600">
                            {task.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src={nameLogo} alt="nameLogo" className='h-8 w-28 cursor-pointer mb-2' />
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                About Us
              </h3>
              <p className="text-gray-600">
                We're dedicated to providing the best platform for managing your
                projects and connecting with others.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    Organizations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Support
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    API Status
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-600 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-600 transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-600 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
             
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-500">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Dashboard