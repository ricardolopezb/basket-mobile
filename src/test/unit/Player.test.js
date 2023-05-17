import React from 'react';
import { render } from '@testing-library/react-native';
import {Player} from "../../components/player/Player";


describe('Player', () => {
  it('renders player name', () => {
    const { getByText } = render(
        <Player name="John Doe" faults={0} matches={10} score={100} parity="even" team="la-lakers" />
    );
    expect(getByText('John Doe')).toBeTruthy();
  });

  it('renders player stats', () => {
    const { getByText } = render(
        <Player name="John Doe" faults={2} matches={10} score={100} parity="odd" team="la-lakers" />
    );
    expect(getByText('- Faults:2')).toBeTruthy();
    expect(getByText('- Matches:10')).toBeTruthy();
    expect(getByText('- Score:100')).toBeTruthy();
  });

  it('should render player name', () => {
    const { getByText } = render(<Player name="John Doe" />);
    expect(getByText('John Doe')).toBeDefined();
  });

  it('should render player stats', () => {
    const { getByText } = render(
        <Player faults={10} matches={20} score={30} />
    );
    expect(getByText('- Faults:10')).toBeDefined();
    expect(getByText('- Matches:20')).toBeDefined();
    expect(getByText('- Score:30')).toBeDefined();
  });

  it('should render Phoenix Suns logo for team "phoenix-suns"', () => {
    const { getByTestId } = render(<Player team="phoenix-suns" />);
    expect(getByTestId('logo').props.source.uri).toEqual(
        'https://1000marcas.net/wp-content/uploads/2020/02/Logo-Phoenix-Suns.png'
    );
  });

  it('should render team logo for other teams', () => {
    const { getByTestId } = render(<Player team="los-angeles-lakers" />);
    expect(getByTestId('logo').props.source.uri).toEqual(
        'https://cdn.freebiesupply.com/images/large/2x/los-angeles-lakers-logo-transparent.png'
    );
  });


});
