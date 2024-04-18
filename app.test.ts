import axios from 'axios';
import { fetchData, sum } from './app';

jest.mock('axios');
const mockAxios = axios as jest.Mocked<typeof axios>;
const url = 'https://jsonplaceholder.typicode.com/posts/1';

describe('fetchData', () => {
  it('should log response data when successful', async () => {
    const mockResponse = { data: 'Mocked response' };
    mockAxios.get.mockResolvedValue(mockResponse);

    const consoleSpy = jest.spyOn(console, 'log');

    await fetchData();

    expect(mockAxios.get).toHaveBeenCalledWith(url);
    expect(consoleSpy).toHaveBeenCalledWith(mockResponse.data);
  });

  it('should log error when request fails', async () => {
    const mockError = new Error('Mocked error');
    mockAxios.get.mockRejectedValue(mockError);

    const consoleSpy = jest.spyOn(console, 'log');

    await fetchData();

    expect(mockAxios.get).toHaveBeenCalledWith(url);
    expect(consoleSpy).toHaveBeenCalledWith(mockError);
  });
});

describe('sum', () => {
  it('should return the sum of two numbers', () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
  });

  it('should return the sum of negative numbers', () => {
    const result = sum(-5, -10);
    expect(result).toBe(-15);
  });

  it('should return zero when one of the numbers is zero', () => {
    const result = sum(0, 10);
    expect(result).toBe(10);
  });
});
