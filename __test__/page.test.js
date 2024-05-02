import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Home from '@/app/page';
import AmountOfVotesPerCandidate from '@/app/page';
import convertStateAcronym from '@/app/page';
import ScrapeComponent from '@/app/page';
import PollTableComponent from '@/app/page';

// Testing AmountofVotesPerCandidate
describe('AmountOfVotesPerCandidate function', () => {
    it('should return correct vote counts for a given list of states', () => {
        const mockStateList = '{"alabama": "Republican", "california": "Democrat"}';
        expect(AmountOfVotesPerCandidate(mockStateList)).to.eql({ "D": 54, "R": 63 });
    });

    it('should return default vote counts if no state list is provided', () => {
        expect(AmountOfVotesPerCandidate('')).to.eql({ "D": 268, "R": 266 });
    });
});



// Testing convertStateAcronym
describe('convertStateAcronym function', () => {
    it('should return the full state name for a valid state acronym', () => {
        expect(convertStateAcronym('CA')).to.equal('california');
    });

    it('should return "unknown" for an invalid state acronym', () => {
        expect(convertStateAcronym('XX')).to.equal('unknown');
    });
});

// Testing ScrapeComponent
describe('ScrapeComponent component', () => {
    it('should render "Loading..." initially', () => {
        const wrapper = shallow(<ScrapeComponent state="California" />);
        expect(wrapper.text()).to.contain('Loading...');
    });

    it('should render a button with the text "Scrape Data"', () => {
        const wrapper = shallow(<ScrapeComponent />);
        expect(wrapper.find('button').text()).to.equal('Scrape Data');
    });

    it('should render an error message if data scraping fails', () => {
        const wrapper = shallow(<ScrapeComponent state="InvalidState" />);
        expect(wrapper.text()).to.contain('Error: Failed to scrape data');
    });
});

// Testing PollTableComponent
describe('PollTableComponent component', () => {
    it('should render a button to go back', () => {
        const wrapper = shallow(<PollTableComponent state="California" />);
        expect(wrapper.find('button').text()).to.equal('go back');
    });

    it('should render a table element', () => {
        const wrapper = shallow(<PollTableComponent state="California" instatePoll={false} setInStatePolls={jest.fn()} />);
        expect(wrapper.find('table')).to.have.lengthOf(1);
    });

    it('should render a table with poll data for a given state', () => {
        const mockPollData = [{ candidate: 'Candidate A', votes: 300 }, { candidate: 'Candidate B', votes: 200 }];
        const wrapper = shallow(<PollTableComponent state="California" instatePoll={false} setInStatePolls={jest.fn()} pollData={mockPollData} />);
        expect(wrapper.find('tr')).to.have.lengthOf(mockPollData.length + 1);
    });
});

// Testing Home Component
describe('Home component', () => {
    it('should render correctly without crashing', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.exists()).to.be.true;
    });

    it('should initially not render in-state polls', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find('PollTableComponent')).to.have.lengthOf(0);
    });
});
