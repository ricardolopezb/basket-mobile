import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ScrollAndRefetch from "../../components/common/ScrollAndRefetch";
import { Text } from 'react-native';


describe('ScrollAndRefetch', () => {
    const fetch = jest.fn();
    const Child = () => <Text>Test Child</Text>;

    it('should render child component', () => {
        const { getByText } = render(
            <ScrollAndRefetch fetch={fetch}>
                <Child />
            </ScrollAndRefetch>
        );

        expect(getByText('Test Child')).toBeDefined();
    });


    it('should display activity indicator on pull-to-refresh', async () => {
        const fetchMock = jest.fn();
        const {getByTestId} = render(<ScrollAndRefetch fetch={fetchMock} />);
        const refreshControl = getByTestId('refreshControl');

        fireEvent(refreshControl, 'refresh');

        const activityIndicator = getByTestId('activityIndicator');
        expect(activityIndicator).toBeTruthy();
    });

});





