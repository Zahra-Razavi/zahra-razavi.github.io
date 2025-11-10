import { createContext, useContext, useState, ReactNode } from 'react';

interface DemoContextType {
  isDemoMode: boolean;
  toggleDemoMode: () => void;
  getDemoValue: (fieldName: string, fieldType?: string) => string;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [isDemoMode, setIsDemoMode] = useState(true); // Default to demo mode enabled

  const toggleDemoMode = () => {
    setIsDemoMode(!isDemoMode);
  };

  const getDemoValue = (fieldName: string, fieldType?: string): string => {
    const name = fieldName.toLowerCase();

    // Signature fields (Step 5)
    if (name.includes('signature')) {
      return 'John Smith';
    }

    // Funding Information fields (Step 4) - Check specific fields first
    if (name.includes('creditcardprocessor') || (name.includes('credit') && name.includes('processor'))) {
      return 'Square';
    }
    if (name.includes('creditcardsalespercent') || (name.includes('creditcard') && name.includes('sales'))) {
      return '75';
    }
    if (name.includes('requestedamount') || name.includes('requested')) {
      return '250000';
    }
    if (name.includes('useofproceeds') || (name.includes('use') && name.includes('proceeds'))) {
      return 'Purchasing new equipment and expanding inventory to support business growth and meet increasing customer demand.';
    }
    if (name.includes('existingfundingpositions') || (name.includes('existing') && name.includes('funding'))) {
      return '2';
    }
    if (name.includes('documenttype') || (name.includes('document') && name.includes('type'))) {
      return 'Application form';
    }
    if (name.includes('documentdescription') || (name.includes('document') && name.includes('description'))) {
      return 'Business loan application documentation';
    }

    // Main Owner Information fields (Step 3) - Check specific fields
    if (name.includes('ownership')) {
      return '51';
    }
    if (name.includes('driverslicense') || name.includes('driver')) {
      return 'D1234567';
    }
    if (name.includes('dateofbirth') || (name.includes('date') && name.includes('birth'))) {
      return '1985-06-15';
    }
    if (name.includes('homephone')) {
      return '(555) 234-5678';
    }
    if (name.includes('homeaddress')) {
      return '456 Oak Avenue';
    }

    // Business Contact fields (Step 2) - Check specific business contact fields
    if (name.includes('landlordfirstname')) {
      return 'David';
    }
    if (name.includes('landlordlastname')) {
      return 'Johnson';
    }
    if (name.includes('landlordcompanyphone') || (name.includes('landlord') && name.includes('phone'))) {
      return '(555) 555-1234';
    }
    if (name.includes('landlordcompanyname') || (name.includes('landlord') && name.includes('company'))) {
      return 'Property Management LLC';
    }

    // Name fields - General first name and last name (for business contact)
    if (name.includes('firstname') && !name.includes('landlord')) {
      return 'John';
    }
    if (name.includes('lastname') && !name.includes('landlord')) {
      return 'Smith';
    }
    
    // Business phone fields - specific to avoid conflicts
    if (name.includes('businessphone')) {
      return '(555) 123-4567';
    }
    if (name.includes('mobilephone')) {
      return '(555) 987-6543';
    }
    
    // Business email
    if (name.includes('businessemail')) {
      return 'john.smith@acmecorp.com';
    }
    
    // Email fields (general)
    if (name.includes('email')) {
      return 'demo.user@lendeck.com';
    }

    // Password fields
    if (name.includes('password') || fieldType === 'password') {
      return 'DemoPass123!';
    }

    // Business name variations
    if (name.includes('merchantname')) {
      return 'Acme Corporation';
    }
    if (name.includes('merchantdba') || name.includes('dba')) {
      return 'Acme Corp';
    }
    if (name.includes('name') && name.includes('merchant')) {
      return 'Acme Corporation';
    }
    if (name.includes('name') && name.includes('business')) {
      return 'Acme Business Solutions';
    }
    if (name.includes('name') || name.includes('fullname') || name === 'name') {
      return 'John Smith';
    }

    // Business Information fields
    if (name.includes('federaltaxid') || name.includes('taxid') || name.includes('ein')) {
      return '12-3456789';
    }
    if (name.includes('entitytype')) {
      return 'llc';
    }
    if (name.includes('industry')) {
      return 'retail';
    }
    if (name.includes('businessrelated')) {
      return 'none';
    }
    if (name.includes('lineofbusiness') || name.includes('businessline')) {
      return 'Wholesale Distribution';
    }
    if (name.includes('businessstartdate') || name.includes('startdate')) {
      return '2018-01-15';
    }
    if (name.includes('ishomebased') || name.includes('homebased')) {
      return 'no';
    }
    if (name.includes('stateofincorporation') || name.includes('incorporation')) {
      return 'NY';
    }
    if (name.includes('bankruptcy') || name.includes('liens')) {
      return 'no';
    }
    if (name.includes('property')) {
      return 'owner';
    }
    if (name.includes('monthlyrent') || name.includes('mortgage')) {
      return '5000';
    }

    // Address fields - business address specific
    if (name.includes('businessaddress')) {
      return '123 Main Street, Suite 100';
    }
    if (name.includes('businesscity')) {
      return 'New York';
    }
    if (name.includes('businessstate')) {
      return 'NY';
    }
    if (name.includes('businesszip')) {
      return '10001';
    }
    
    // Address fields - general
    if (name.includes('address') && name.includes('line1')) {
      return '123 Main Street';
    }
    if (name.includes('address') && name.includes('line2')) {
      return 'Suite 400';
    }
    if (name.includes('address') && !name.includes('line')) {
      return '123 Main Street';
    }
    if (name.includes('city')) {
      return 'New York';
    }
    if (name.includes('state')) {
      return 'NY';
    }
    if (name.includes('zip') || name.includes('postal')) {
      return '10001';
    }
    if (name.includes('country')) {
      return 'United States';
    }

    // Phone fields - general
    if (name.includes('phone') || name.includes('mobile') || name.includes('telephone')) {
      return '(555) 123-4567';
    }

    // Company fields
    if (name.includes('company')) {
      return 'Acme Corporation';
    }
    if (name.includes('position') || name.includes('title') || name.includes('jobtitle')) {
      return 'CEO';
    }

    // Financial fields
    if (name.includes('amount') || name.includes('funding')) {
      return '250000';
    }
    if (name.includes('revenue') || name.includes('sales')) {
      return '1500000';
    }
    if (name.includes('profit')) {
      return '350000';
    }
    if (name.includes('commission')) {
      return '5.5';
    }

    // SSN/Tax fields
    if (name.includes('ssn') || name.includes('socialsecurity')) {
      return '123-45-6789';
    }

    // Website
    if (name.includes('businesswebsite')) {
      return 'www.acmecorp.com';
    }
    if (name.includes('website') || name.includes('url')) {
      return 'https://www.acmecorp.com';
    }

    // Description/Notes
    if (name.includes('description') || name.includes('notes') || name.includes('comment')) {
      return 'This is a demo description for testing purposes.';
    }

    // Date fields
    if (fieldType === 'date' || name.includes('date')) {
      return '2024-01-15';
    }

    // Number fields
    if (fieldType === 'number') {
      return '100';
    }

    // Default
    return 'Demo Value';
  };

  return (
    <DemoContext.Provider value={{ isDemoMode, toggleDemoMode, getDemoValue }}>
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error('useDemo must be used within a DemoProvider');
  }
  return context;
}