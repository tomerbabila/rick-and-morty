import { ReactComponent as Star } from 'assets/star.svg';
import { ReactComponent as ChevronLeft } from 'assets/chevron-left.svg';
import { ReactComponent as ChevronRight } from 'assets/chevron-right.svg';
import { ReactComponent as Close } from 'assets/close.svg';
import { ReactComponent as Logo } from 'assets/rick-and-morty-logo.svg';
import { ReactComponent as Loader } from 'assets/rick-and-morty-loader.svg';
import { ReactComponent as EmptyState } from 'assets/empty-state.svg';

export const icons = { Star, ChevronLeft, ChevronRight, Close, Logo, Loader, EmptyState };
export type IconName = keyof typeof icons;
