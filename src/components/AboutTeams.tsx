
import { Twitter, Facebook, Linkedin } from 'lucide-react';

// You'll need to add these team images to your assets folder
import team1 from '../assets/about/team-1.png';
import team2 from '../assets/about/team-2.png';
import team3 from '../assets/about/team-3.png';
import team4 from '../assets/about/team-4.png';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Oluwafemi Adegbanga',
      title: 'Founder & CEO',
      image: team1,
      description: 'With a vision to revolutionize the real estate industry, [Name] founded House Bank Real Estate to offer personalized and innovative property solutions. As a seasoned professional with [X years] of experience, [Name] leads the team with integrity, innovation, and a client-first approach.',
      socialLinks: {
        twitter: '#',
        facebook: '#',
        linkedin: '#'
      }
    },
    {
      id: 2,
      name: 'Oluwafemi Adegbanga',
      title: 'Chief Operating Officer',
      image: team2,
      description: 'With a vision to revolutionize the real estate industry, [Name] founded House Bank Real Estate to offer personalized and innovative property solutions. As a seasoned professional with [X years] of experience, [Name] leads the team with integrity, innovation, and a client-first approach.',
      socialLinks: {
        twitter: '#',
        facebook: '#',
        linkedin: '#'
      }
    },
    {
      id: 3,
      name: 'Oluwafemi Adegbanga',
      title: 'Senior Sales Manager',
      image: team3,
      description: 'With a vision to revolutionize the real estate industry, [Name] founded House Bank Real Estate to offer personalized and innovative property solutions. As a seasoned professional with [X years] of experience, [Name] leads the team with integrity, innovation, and a client-first approach.',
      socialLinks: {
        twitter: '#',
        facebook: '#',
        linkedin: '#'
      }
    },
    {
      id: 4,
      name: 'Oluwafemi Adegbanga',
      title: 'Leasing Consultant',
      image: team4,
      description: 'With a vision to revolutionize the real estate industry, [Name] founded House Bank Real Estate to offer personalized and innovative property solutions. As a seasoned professional with [X years] of experience, [Name] leads the team with integrity, innovation, and a client-first approach.',
      socialLinks: {
        twitter: '#',
        facebook: '#',
        linkedin: '#'
      }
    }
  ];

  const TeamCard = ({ member }: { member: typeof teamMembers[0] }) => (
    <div className="bg-white rounded-2xl overflow-hidden hover:shadow-sm transition-shadow">
      {/* Team Member Image */}
      <div className="relative">
        <div className="w-full h-60 overflow-hidden">
          <img 
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Name Overlay */}
        <div className="absolute bottom-4 left-4">
          <div className="relative right-5 top-11 bg-opacity-75 text-white px-3 py-1 text-sm font-medium" style={{ background: '#312630' }}>
            {member.name}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4  mt-3">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900">
          {member.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {member.description}
        </p>

        {/* Social Media Links */}
        <div className="flex items-center space-x-3 pt-2">
          <a 
            href={member.socialLinks.twitter}
            className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
            aria-label={`${member.name} Twitter`}
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a 
            href={member.socialLinks.facebook}
            className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
            aria-label={`${member.name} Facebook`}
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a 
            href={member.socialLinks.linkedin}
            className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
            aria-label={`${member.name} LinkedIn`}
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
            At House Bank Real Estate, we make renting, buying, and investing in property seamless and rewarding. Whether you're looking for your next home, rental space, or a lucrative investment opportunity, our team is here to guide you every step of the way.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;