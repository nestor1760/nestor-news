'use client'

import { useMemo } from 'react';
import { IArticle, TFilterProps } from '../types/types';

export const useFilter = ({ inputValue, list }: TFilterProps): IArticle[] => {
  const filteredList = useMemo(() =>
    (!inputValue)
      ? list
      : list.filter(article =>
        article.title.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()) ||
        article.author.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()) ||
        article.publishedAt.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
      ), [inputValue, list]);

  return filteredList;
}