import { COLORS, FILTER_LIST } from '@/constant';
import { useChartFilter } from '@/hooks';
import { useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';

type filterListType = { id: number; content: string };
type FilterBtnProps = { $isSelected: boolean };

const FilterBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { highlightSelectedId } = useChartFilter();
  const changeParams = (id: string) => {
    setSearchParams(searchParams.has(id) ? '' : { id: [id] });
    highlightSelectedId(id);
  };

  const selectedParams = searchParams.get('id');

  return (
    <FilterBtnWrap>
      {FILTER_LIST.map(({ id, content }: filterListType) => (
        <FilterBtn
          key={id}
          onClick={() => changeParams(content)}
          $isSelected={selectedParams === content}
        >
          {content}
        </FilterBtn>
      ))}
    </FilterBtnWrap>
  );
};

export default FilterBox;

const FilterBtnWrap = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const FilterBtn = styled.button<FilterBtnProps>`
  margin: 0px 5px;
  padding: 5px 11px;
  background-color: ${({ $isSelected }) => ($isSelected ? COLORS.purple.dark : '#fff')};
  border: 1px solid ${COLORS.purple.dark};
  border-radius: 5px;
  font-size: 16px;
  color: ${({ $isSelected }) => ($isSelected ? '#fff' : COLORS.purple.dark)};
`;
