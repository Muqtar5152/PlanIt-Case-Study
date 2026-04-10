import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import Home from './pages/Home';

const REPO_BASE = '/PlanIt-Case-Study/';
const getBasePath = () => (window.location.pathname.startsWith(REPO_BASE) ? REPO_BASE : '/');
const routerBase = getBasePath().replace(/\/$/, '') || '/';

function App() {

  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router basename={routerBase}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App