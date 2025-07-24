// src/hooks/useServices.ts
import { useQuery } from '@tanstack/react-query';
import * as servicesApi from '../api/services';
import { Service } from '../types/service.types';

export function useServices() {
  return useQuery<Service[], Error>(['services'], servicesApi.getServices);
}
