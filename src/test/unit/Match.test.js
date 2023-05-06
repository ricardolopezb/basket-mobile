import {Match} from "../../components/match/Match";
import {render} from "@testing-library/react-native";

describe('Match component', () => {
    it('should render team logos and points', () => {
        const { getByTestId, getByText } = render(
            <Match
                team1Name="phoenix-suns"
                team2Name="los-angeles-lakers"
                team1Points={100}
                team2Points={110}
            />
        );
        expect(getByTestId('logo-1').props.source.uri).toEqual(
            'https://cdn.freebiesupply.com/images/large/2x/phoenix-suns-logo-transparent.png'
        );
        expect(getByText('100')).toBeDefined();
        expect(getByText('-')).toBeDefined();
        expect(getByText('110')).toBeDefined();
        expect(getByTestId('logo-2').props.source.uri).toEqual(
            'https://cdn.freebiesupply.com/images/large/2x/los-angeles-lakers-logo-transparent.png'
        );
    });
    it('renders team logos and points', () => {
        const { getByTestId, getByText } = render(
            <Match
                team1Name="phoenix-suns"
                team2Name="los-angeles-lakers"
                team1Points={100}
                team2Points={110}
            />
        );
        const logo1 = getByTestId('logo-1');
        expect(logo1.props.source.uri).toContain('phoenix-suns');
        expect(getByText('100')).toBeDefined();
        expect(getByText('-')).toBeDefined();
        expect(getByText('110')).toBeDefined();
        const logo2 = getByTestId('logo-2');
        expect(logo2.props.source.uri).toContain('los-angeles-lakers');
    });


    it('renders team logos with correct dimensions', () => {
        const { getByTestId } = render(
            <Match
                team1Name="phoenix-suns"
                team2Name="los-angeles-lakers"
                team1Points={100}
                team2Points={110}
            />
        );
        const logo1 = getByTestId('logo-1');
        expect(logo1.props.style).toEqual({ height: 100, width: 80 });
        const logo2 = getByTestId('logo-2');
        expect(logo2.props.style).toEqual({ height: 100, width: 80 });
    });

    it('renders team logos and points', () => {
        const { getByTestId, getByText } = render(
            <Match
                team1Name="phoenix-suns"
                team2Name="los-angeles-lakers"
                team1Points={100}
                team2Points={110}
            />
        );
        const logo1 = getByTestId('logo-1');
        expect(logo1.props.source.uri).toContain('phoenix-suns');
        expect(getByText('100')).toBeDefined();
        expect(getByText('-')).toBeDefined();
        expect(getByText('110')).toBeDefined();
        const logo2 = getByTestId('logo-2');
        expect(logo2.props.source.uri).toContain('los-angeles-lakers');
    });

    it('renders team logos with correct dimensions', () => {
        const { getByTestId } = render(
            <Match
                team1Name="phoenix-suns"
                team2Name="los-angeles-lakers"
                team1Points={100}
                team2Points={110}
            />
        );
        const logo1 = getByTestId('logo-1');
        expect(logo1.props.style).toEqual({ height: 100, width: 80 });
        const logo2 = getByTestId('logo-2');
        expect(logo2.props.style).toEqual({ height: 100, width: 80 });
    });

    it('renders default logos if team logos not provided', () => {
        const defaultLogoURL = 'https://cdn.freebiesupply.com/images/large/2x/undefined-logo-transparent.png'
        const { getByTestId } = render(<Match />);
        const logo1 = getByTestId('logo-1');
        expect(logo1.props.source.uri).toContain(defaultLogoURL);
        const logo2 = getByTestId('logo-2');
        expect(logo2.props.source.uri).toContain(defaultLogoURL);
    });


});