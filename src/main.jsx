import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ProspectiveStudentLayout, NewStudentLayout, CurrentStudentLayout } from './layouts/StudentLayouts'
import PlaceholderPage from './components/pages/PlaceholderPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        
        <Route path="/prospective-student" element={<ProspectiveStudentLayout />}>
          <Route index element={<PlaceholderPage title="Prospective Student Dashboard" />} />
          <Route path="programs" element={<PlaceholderPage title="Programs" />} />
          <Route path="admissions" element={<PlaceholderPage title="Admissions Process" />} />
          <Route path="financial-aid" element={<PlaceholderPage title="Financial Aid" />} />
        </Route>

        <Route path="/new-student" element={<NewStudentLayout />}>
          <Route index element={<PlaceholderPage title="New Student Dashboard" />} />
          <Route path="orientation" element={<PlaceholderPage title="Orientation" />} />
          <Route path="course-registration" element={<PlaceholderPage title="Course Registration" />} />
          <Route path="housing" element={<PlaceholderPage title="Housing" />} />
          <Route path="settings" element={<PlaceholderPage title="Settings" />} />
        </Route>

        <Route path="/current-student" element={<CurrentStudentLayout />}>
          <Route index element={<PlaceholderPage title="Current Student Dashboard" />} />
          <Route path="my-schedule" element={<PlaceholderPage title="My Schedule" />} />
          <Route path="courses" element={<PlaceholderPage title="Courses" />} />
          <Route path="financial-hub" element={<PlaceholderPage title="Financial Hub" />} />
          <Route path="graduation-tracker" element={<PlaceholderPage title="Graduation Tracker" />} />
          <Route path="settings" element={<PlaceholderPage title="Settings" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
