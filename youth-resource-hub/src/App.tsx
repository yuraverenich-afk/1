import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import FindHelp from './pages/FindHelp';
import ResourceDetail from './pages/ResourceDetail';
import Eligibility from './pages/Eligibility';
import Providers from './pages/Providers';
import GetHelpNow from './pages/GetHelpNow';
import Privacy from './pages/Privacy';
import Saved from './pages/Saved';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { ResourcesProvider } from './context/ResourcesContext';
import { SavedResourcesProvider } from './context/SavedResourcesContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ResourcesProvider>
        <SavedResourcesProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/find-help" element={<FindHelp />} />
              <Route path="/resources/:id" element={<ResourceDetail />} />
              <Route path="/eligibility" element={<Eligibility />} />
              <Route path="/providers" element={<Providers />} />
              <Route path="/get-help-now" element={<GetHelpNow />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </SavedResourcesProvider>
      </ResourcesProvider>
    </BrowserRouter>
  );
};

export default App;
