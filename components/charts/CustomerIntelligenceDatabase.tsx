'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CustomerData {
  sNo: number
  // Customer Information
  customerType: string
  customerName: string
  parentGroup: string
  hqLocation: string
  website: string
  ownershipType: string
  // Contact Details
  keyContactPerson: string
  designation: string
  emailAddress: string
  phoneNumber: string
  linkedInProfile: string
  // Business Scenario (for Preposition 2 and 3)
  coreBusinessPurpose: string
  whatTheyOffer: string
  valuationFrequency: string
  // Current Service Provider (for Preposition 3)
  currentProviderName: string
  providerType: string
  contractModel: string
  // Critical Pointers (for Preposition 3)
  customerNeedTiming: string
  issuesFacedEarlier: string
  otherKeyDetails: string
  // WMR Insights (for Preposition 3)
  customerBenchmarkingSummary: string
  additionalComments: string
}

// Sample data for demonstration
const sampleCustomerData: CustomerData[] = [
  {
    sNo: 1,
    // Customer Information
    customerType: 'Lender',
    customerName: 'ABC Bank Ltd',
    parentGroup: 'ABC Financial Group',
    hqLocation: 'London, UK',
    website: 'www.abcbank.com',
    ownershipType: 'Public',
    // Contact Details
    keyContactPerson: 'John Smith',
    designation: 'Head of Real Estate Finance',
    emailAddress: 'j.smith@abcbank.com',
    phoneNumber: '+44 20 7123 4567',
    linkedInProfile: 'linkedin.com/in/johnsmith',
    // Business Scenario
    coreBusinessPurpose: 'Commercial lending for real estate acquisitions and refinancing',
    whatTheyOffer: 'CRE loans, Bridge financing, Development loans',
    valuationFrequency: 'Quarterly',
    // Current Service Provider
    currentProviderName: 'Global Valuers Inc',
    providerType: 'Global valuation firm',
    contractModel: 'Panel',
    // Critical Pointers
    customerNeedTiming: 'High volume Q1 and Q3, 5-day turnaround required',
    issuesFacedEarlier: 'Delays in complex asset valuations',
    otherKeyDetails: 'Requires RICS registered valuers',
    // WMR Insights
    customerBenchmarkingSummary: 'High potential - Large lending portfolio',
    additionalComments: 'Looking to diversify valuation panel'
  },
  {
    sNo: 2,
    // Customer Information
    customerType: 'Investor',
    customerName: 'XYZ Real Estate Fund',
    parentGroup: 'XYZ Asset Management',
    hqLocation: 'New York, USA',
    website: 'www.xyzfund.com',
    ownershipType: 'Private',
    // Contact Details
    keyContactPerson: 'Sarah Johnson',
    designation: 'VP of Acquisitions',
    emailAddress: 's.johnson@xyzfund.com',
    phoneNumber: '+1 212 555 0100',
    linkedInProfile: 'linkedin.com/in/sarahjohnson',
    // Business Scenario
    coreBusinessPurpose: 'Real estate fund management and acquisitions',
    whatTheyOffer: 'Real estate fund products, Core-plus strategies',
    valuationFrequency: 'Monthly',
    // Current Service Provider
    currentProviderName: 'Big 4 Valuation Services',
    providerType: 'Big 4',
    contractModel: 'Framework agreement',
    // Critical Pointers
    customerNeedTiming: 'Year-end valuations critical, ongoing transaction support',
    issuesFacedEarlier: 'Inconsistent methodology across regions',
    otherKeyDetails: 'Multi-jurisdiction portfolio coverage needed',
    // WMR Insights
    customerBenchmarkingSummary: 'High potential - Expanding portfolio',
    additionalComments: 'Active in European expansion'
  },
  {
    sNo: 3,
    // Customer Information
    customerType: 'Owner-Operator',
    customerName: 'Property Holdings Corp',
    parentGroup: '',
    hqLocation: 'Singapore',
    website: 'www.pholdings.com',
    ownershipType: 'Public',
    // Contact Details
    keyContactPerson: 'Michael Chen',
    designation: 'Director of Asset Management',
    emailAddress: 'm.chen@pholdings.com',
    phoneNumber: '+65 6789 0123',
    linkedInProfile: 'linkedin.com/in/michaelchen',
    // Business Scenario
    coreBusinessPurpose: 'Property operations and asset management',
    whatTheyOffer: 'Property operations, Leasing services',
    valuationFrequency: 'Bi-annually',
    // Current Service Provider
    currentProviderName: 'Local Appraisers Pte Ltd',
    providerType: 'Local appraiser',
    contractModel: 'Per assignment',
    // Critical Pointers
    customerNeedTiming: 'Fiscal year-end March, regulatory compliance required',
    issuesFacedEarlier: 'Limited coverage for overseas assets',
    otherKeyDetails: 'Requires compliance with SGX listing rules',
    // WMR Insights
    customerBenchmarkingSummary: 'Medium potential - Stable operations',
    additionalComments: 'May need regional coverage expansion'
  },
  {
    sNo: 4,
    // Customer Information
    customerType: 'Developer',
    customerName: 'Metro Development Group',
    parentGroup: 'Metro Conglomerate',
    hqLocation: 'Dubai, UAE',
    website: 'www.metrodev.ae',
    ownershipType: 'Private',
    // Contact Details
    keyContactPerson: 'Ahmed Hassan',
    designation: 'CFO',
    emailAddress: 'a.hassan@metrodev.ae',
    phoneNumber: '+971 4 123 4567',
    linkedInProfile: 'linkedin.com/in/ahmedhassan',
    // Business Scenario
    coreBusinessPurpose: 'Real estate development and project management',
    whatTheyOffer: 'Development projects, Mixed-use developments',
    valuationFrequency: 'Per project milestone',
    // Current Service Provider
    currentProviderName: 'Regional Valuers LLC',
    providerType: 'Boutique specialist',
    contractModel: 'Per assignment',
    // Critical Pointers
    customerNeedTiming: 'Project financing stages, investor reporting',
    issuesFacedEarlier: 'Slow turnaround on development appraisals',
    otherKeyDetails: 'Requires development appraisal expertise',
    // WMR Insights
    customerBenchmarkingSummary: 'High potential - Active pipeline',
    additionalComments: 'Multiple projects in planning stage'
  },
  {
    sNo: 5,
    // Customer Information
    customerType: 'Corporate Occupier',
    customerName: 'TechCorp International',
    parentGroup: 'TechCorp Holdings',
    hqLocation: 'San Francisco, USA',
    website: 'www.techcorp.com',
    ownershipType: 'Public',
    // Contact Details
    keyContactPerson: 'Jennifer Williams',
    designation: 'Head of Corporate Real Estate',
    emailAddress: 'j.williams@techcorp.com',
    phoneNumber: '+1 415 555 0200',
    linkedInProfile: 'linkedin.com/in/jenniferwilliams',
    // Business Scenario
    coreBusinessPurpose: 'Corporate real estate portfolio management',
    whatTheyOffer: 'Leasing, Portfolio optimization',
    valuationFrequency: 'Annually',
    // Current Service Provider
    currentProviderName: 'Corporate Real Estate Advisors',
    providerType: 'Global valuation firm',
    contractModel: 'Retainer',
    // Critical Pointers
    customerNeedTiming: 'Annual reporting cycle, lease negotiations',
    issuesFacedEarlier: 'None reported',
    otherKeyDetails: 'Requires IFRS 16 compliance expertise',
    // WMR Insights
    customerBenchmarkingSummary: 'Medium potential - Established relationship',
    additionalComments: 'Open to competitive proposals'
  },
  {
    sNo: 6,
    // Customer Information
    customerType: 'Public Sector',
    customerName: 'Government Property Agency',
    parentGroup: 'Ministry of Finance',
    hqLocation: 'Canberra, Australia',
    website: 'www.gpa.gov.au',
    ownershipType: 'Government',
    // Contact Details
    keyContactPerson: 'David Park',
    designation: 'Director of Property Services',
    emailAddress: 'd.park@gpa.gov.au',
    phoneNumber: '+61 2 6123 4567',
    linkedInProfile: 'linkedin.com/in/davidpark',
    // Business Scenario
    coreBusinessPurpose: 'Government property management and disposals',
    whatTheyOffer: 'Property management, Asset disposals',
    valuationFrequency: 'As required',
    // Current Service Provider
    currentProviderName: 'Approved Panel Valuers',
    providerType: 'Bank approved panel firm',
    contractModel: 'Panel',
    // Critical Pointers
    customerNeedTiming: 'Budget cycles, disposal programs',
    issuesFacedEarlier: 'Procurement process delays',
    otherKeyDetails: 'Requires government panel accreditation',
    // WMR Insights
    customerBenchmarkingSummary: 'Low potential - Government procurement',
    additionalComments: 'Long procurement cycles'
  }
]

interface PrepositionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function Preposition({ title, isOpen, onToggle, children }: PrepositionProps) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 rounded-lg transition-colors"
      >
        <span className="text-lg font-semibold text-black">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-2 pb-4 bg-white rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  )
}

interface CustomerIntelligenceDatabaseProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceDatabase(_props: CustomerIntelligenceDatabaseProps) {
  const [openPreposition, setOpenPreposition] = useState<number | null>(1)

  const togglePreposition = (num: number) => {
    setOpenPreposition(openPreposition === num ? null : num)
  }

  // Preposition 1 Table - Customer Information + Contact Details
  const renderPreposition1Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#DEB887] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={5} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
          </tr>
          <tr className="bg-gray-100">
            {/* Customer Information Headers */}
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Customer Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Lender / Investor / Owner-Operator / Developer / Corporate Occupier / Public Sector / Intermediary)</div>
            </th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Customer Name</div>
              <div className="font-normal text-[10px] text-gray-600">(Legal Entity)</div>
            </th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Parent / Group</div>
              <div className="font-normal text-[10px] text-gray-600">(if applicable)</div>
            </th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[120px]">
              <div>HQ Location</div>
              <div className="font-normal text-[10px] text-gray-600">(City, Country)</div>
            </th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Website</th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Ownership Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Public / Private / Government)</div>
            </th>
            {/* Contact Details Headers */}
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Key Contact Person</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Designation/ Role</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Address</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Phone/WhatsApp Number</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">LinkedIn Profile</th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={customer.sNo} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {/* Customer Information Data */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  customer.customerType === 'Lender' ? 'bg-blue-100 text-blue-800' :
                  customer.customerType === 'Investor' ? 'bg-green-100 text-green-800' :
                  customer.customerType === 'Owner-Operator' ? 'bg-purple-100 text-purple-800' :
                  customer.customerType === 'Developer' ? 'bg-orange-100 text-orange-800' :
                  customer.customerType === 'Corporate Occupier' ? 'bg-teal-100 text-teal-800' :
                  customer.customerType === 'Public Sector' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {customer.customerType}
                </span>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.parentGroup || '-'}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.hqLocation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.website}`} target="_blank" rel="noopener noreferrer">{customer.website}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  customer.ownershipType === 'Public' ? 'bg-blue-100 text-blue-800' :
                  customer.ownershipType === 'Private' ? 'bg-gray-100 text-gray-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {customer.ownershipType}
                </span>
              </td>
              {/* Contact Details Data */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneNumber}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Preposition 2 Table - Customer Information + Contact Details + Business Scenario
  const renderPreposition2Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#DEB887] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={5} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Business Scenario
            </th>
          </tr>
          <tr className="bg-gray-100">
            {/* Customer Information Headers */}
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Customer Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Lender / Investor / Owner-Operator / Developer / Corporate Occupier / Public Sector / Intermediary)</div>
            </th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Customer Name</div>
              <div className="font-normal text-[10px] text-gray-600">(Legal Entity)</div>
            </th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Parent / Group</div>
              <div className="font-normal text-[10px] text-gray-600">(if applicable)</div>
            </th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[120px]">
              <div>HQ Location</div>
              <div className="font-normal text-[10px] text-gray-600">(City, Country)</div>
            </th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Website</th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Ownership Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Public / Private / Government)</div>
            </th>
            {/* Contact Details Headers */}
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Key Contact Person</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Designation/ Role</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Address</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Phone/WhatsApp Number</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">LinkedIn Profile</th>
            {/* Business Scenario Headers */}
            <th className="bg-[#E0FFFF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Core Business and Purpose of Using CRE Valuation Services</div>
            </th>
            <th className="bg-[#E0FFFF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>What They Offer</div>
              <div className="font-normal text-[10px] text-gray-600">(products/services: e.g., CRE loans, real estate fund products, leasing, property operations, development)</div>
            </th>
            <th className="bg-[#E0FFFF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[120px]">
              <div>Valuation Frequency</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={customer.sNo} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {/* Customer Information Data */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  customer.customerType === 'Lender' ? 'bg-blue-100 text-blue-800' :
                  customer.customerType === 'Investor' ? 'bg-green-100 text-green-800' :
                  customer.customerType === 'Owner-Operator' ? 'bg-purple-100 text-purple-800' :
                  customer.customerType === 'Developer' ? 'bg-orange-100 text-orange-800' :
                  customer.customerType === 'Corporate Occupier' ? 'bg-teal-100 text-teal-800' :
                  customer.customerType === 'Public Sector' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {customer.customerType}
                </span>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.parentGroup || '-'}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.hqLocation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.website}`} target="_blank" rel="noopener noreferrer">{customer.website}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  customer.ownershipType === 'Public' ? 'bg-blue-100 text-blue-800' :
                  customer.ownershipType === 'Private' ? 'bg-gray-100 text-gray-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {customer.ownershipType}
                </span>
              </td>
              {/* Contact Details Data */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneNumber}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
              </td>
              {/* Business Scenario Data */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.coreBusinessPurpose}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.whatTheyOffer}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.valuationFrequency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Preposition 3 Table - All sections including Current Service Provider, Critical Pointers, and WMR Insights
  const renderPreposition3Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#DEB887] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={5} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Business Scenario
            </th>
            <th colSpan={3} className="bg-[#DDA0DD] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Current Service Provider
            </th>
            <th colSpan={3} className="bg-[#4169E1] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-white">
              Critical Pointers a Valuation Service Provider Must Know About Customers (To Win Business)
            </th>
            <th colSpan={2} className="bg-[#90EE90] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              WMR Insights
            </th>
          </tr>
          <tr className="bg-gray-100">
            {/* Customer Information Headers */}
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Customer Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Lender / Investor / Owner-Operator / Developer / Corporate Occupier / Public Sector / Intermediary)</div>
            </th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Customer Name</div>
              <div className="font-normal text-[10px] text-gray-600">(Legal Entity)</div>
            </th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Parent / Group</div>
              <div className="font-normal text-[10px] text-gray-600">(if applicable)</div>
            </th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[120px]">
              <div>HQ Location</div>
              <div className="font-normal text-[10px] text-gray-600">(City, Country)</div>
            </th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Website</th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Ownership Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Public / Private / Government)</div>
            </th>
            {/* Contact Details Headers */}
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Key Contact Person</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Designation/ Role</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Address</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Phone/WhatsApp Number</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">LinkedIn Profile</th>
            {/* Business Scenario Headers */}
            <th className="bg-[#E0FFFF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Core Business and Purpose of Using CRE Valuation Services</div>
            </th>
            <th className="bg-[#E0FFFF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>What They Offer</div>
              <div className="font-normal text-[10px] text-gray-600">(products/services: e.g., CRE loans, real estate fund products, leasing, property operations, development)</div>
            </th>
            <th className="bg-[#E0FFFF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[120px]">
              <div>Valuation Frequency</div>
            </th>
            {/* Current Service Provider Headers */}
            <th className="bg-[#E6E6FA] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Current Provider Name</div>
            </th>
            <th className="bg-[#E6E6FA] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Provider Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Global valuation firm / Local appraiser / Big 4 / Bank approved panel firm / Boutique specialist)</div>
            </th>
            <th className="bg-[#E6E6FA] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Contract Model</div>
              <div className="font-normal text-[10px] text-gray-600">(Panel / Framework agreement / Per assignment / Retainer)</div>
            </th>
            {/* Critical Pointers Headers */}
            <th className="bg-[#6495ED] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Customer Need & Timing - Transaction pipeline/Speed and Requirement</div>
            </th>
            <th className="bg-[#6495ED] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Issues Faced Earlier with the Current Service Provider</div>
            </th>
            <th className="bg-[#6495ED] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Other Key Details (If Any)</div>
            </th>
            {/* WMR Insights Headers */}
            <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Customer Benchmarking Summary</div>
              <div className="font-normal text-[10px] text-gray-600">(Potential Customers)</div>
            </th>
            <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Additional Comments/ Notes By WMR team</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={customer.sNo} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {/* Customer Information Data */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  customer.customerType === 'Lender' ? 'bg-blue-100 text-blue-800' :
                  customer.customerType === 'Investor' ? 'bg-green-100 text-green-800' :
                  customer.customerType === 'Owner-Operator' ? 'bg-purple-100 text-purple-800' :
                  customer.customerType === 'Developer' ? 'bg-orange-100 text-orange-800' :
                  customer.customerType === 'Corporate Occupier' ? 'bg-teal-100 text-teal-800' :
                  customer.customerType === 'Public Sector' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {customer.customerType}
                </span>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.parentGroup || '-'}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.hqLocation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.website}`} target="_blank" rel="noopener noreferrer">{customer.website}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  customer.ownershipType === 'Public' ? 'bg-blue-100 text-blue-800' :
                  customer.ownershipType === 'Private' ? 'bg-gray-100 text-gray-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {customer.ownershipType}
                </span>
              </td>
              {/* Contact Details Data */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneNumber}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
              </td>
              {/* Business Scenario Data */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.coreBusinessPurpose}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.whatTheyOffer}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.valuationFrequency}</td>
              {/* Current Service Provider Data */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.currentProviderName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  customer.providerType === 'Global valuation firm' ? 'bg-blue-100 text-blue-800' :
                  customer.providerType === 'Big 4' ? 'bg-purple-100 text-purple-800' :
                  customer.providerType === 'Local appraiser' ? 'bg-green-100 text-green-800' :
                  customer.providerType === 'Bank approved panel firm' ? 'bg-teal-100 text-teal-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {customer.providerType}
                </span>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  customer.contractModel === 'Panel' ? 'bg-blue-100 text-blue-800' :
                  customer.contractModel === 'Framework agreement' ? 'bg-green-100 text-green-800' :
                  customer.contractModel === 'Per assignment' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {customer.contractModel}
                </span>
              </td>
              {/* Critical Pointers Data */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerNeedTiming}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.issuesFacedEarlier}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.otherKeyDetails}</td>
              {/* WMR Insights Data */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerBenchmarkingSummary}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.additionalComments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-black mb-6">Customer Intelligence Database</h2>

      <Preposition
        title="Preposition 1 - Basic"
        isOpen={openPreposition === 1}
        onToggle={() => togglePreposition(1)}
      >
        {renderPreposition1Table()}
      </Preposition>

      <Preposition
        title="Preposition 2 - Advanced"
        isOpen={openPreposition === 2}
        onToggle={() => togglePreposition(2)}
      >
        {renderPreposition2Table()}
      </Preposition>

      <Preposition
        title="Preposition 3 - Premium"
        isOpen={openPreposition === 3}
        onToggle={() => togglePreposition(3)}
      >
        {renderPreposition3Table()}
      </Preposition>
    </div>
  )
}
