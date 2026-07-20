// Butler County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-19

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The vendor that hosts the county Auditor's online parcel/property records.
export const AUDITOR_VENDOR = "Pivot Point (Data Dynamics)";

export const LINKS = [
  // ---------- Government ----------
  { name: "Butler County (Official Site)", category: "Government", subcategory: "County", url: "https://www.bcohio.gov/", description: "Official government portal for Butler County, Ohio (county seat: Hamilton)." },
  { name: "Butler County Auditor – Property Search", category: "Government", subcategory: "Auditor", url: "https://propertysearch.bcohio.gov/", description: "Property records, valuations, and parcel/property search (hosted on Pivot Point / Data Dynamics)." },
  { name: "Butler County Board of Elections", category: "Government", subcategory: "Elections", url: "https://elections.bcohio.gov/", description: "Voter registration, polling locations, and election administration." },
  { name: "City of Hamilton", category: "Government", subcategory: "City", url: "https://www.hamilton-oh.gov/", description: "Government site for the City of Hamilton, the county seat." },
  // ---------- Education ----------
  { name: "Miami University", category: "Education", subcategory: "Higher Ed", url: "https://miamioh.edu/", description: "Public research university in Oxford, Butler County's flagship higher-education institution." },
  { name: "Lane Libraries", category: "Education", subcategory: "Library", url: "https://www.lanepl.org/", description: "Public library system serving Hamilton, Fairfield, and Oxford." },
  { name: "MidPointe Library System", category: "Education", subcategory: "Library", url: "https://www.midpointelibrary.org/", description: "Public library system serving Middletown, West Chester, and eastern Butler County." },
  { name: "Hamilton City Schools", category: "Education", subcategory: "K-12", url: "https://www.hamiltoncityschools.com/", description: "Public school district serving the City of Hamilton." },
  // ---------- Health ----------
  { name: "Butler County General Health District", category: "Health", subcategory: "Public Health", url: "https://health.bcohio.gov/", description: "County public-health agency: clinics, inspections, vital records, and programs." },
  { name: "Kettering Health Hamilton", category: "Health", subcategory: "Hospital", url: "https://ketteringhealth.org/", description: "Hospital and health network serving Hamilton and Butler County." },
  // ---------- Business & Economy ----------
  { name: "Greater Hamilton Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.greaterhamiltonchamber.com/", description: "Business advocacy and member support for the Hamilton area and Butler County." },
  // ---------- Community & Social ----------
  { name: "OhioMeansJobs Butler County", category: "Community & Social", subcategory: "Assistance", url: "https://ohiomeansjobs.ohio.gov/job-seekers/find-a-job/local-help/butler-county", description: "Workforce, job-search, and employment services for county residents." },
  { name: "Butler County Job & Family Services", category: "Community & Social", subcategory: "Assistance", url: "https://jfs.bcohio.gov/", description: "Public assistance, child support, and family services for county residents." },
  // ---------- Recreation & Tourism ----------
  { name: "Travel Butler County", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://www.travelbutlercounty.com/", description: "Official visitor guide to Butler County attractions, events, dining, and lodging." },
  { name: "MetroParks of Butler County", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.yourmetroparks.net/", description: "County park district with trails, preserves, and outdoor recreation." },
  // ---------- News & Media ----------
  { name: "Journal-News", category: "News & Media", subcategory: "Newspaper", url: "https://www.journal-news.com/", description: "Hamilton-based daily newspaper covering Butler County." },
];
