/*
Copyright 2021 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { WAITING_FOR_PEER_APPROVAL, READY_FOR_REVIEW_COLUMN } from '../constants';
import { moveProjectCard } from './move-project-card';

interface moveProjectCardToReadyForReviewProps {
  pull_number: number;
}

export const moveProjectCardToReadyForReview = async ({ pull_number }: moveProjectCardToReadyForReviewProps) => {
  const originColumn = WAITING_FOR_PEER_APPROVAL;
  const destinationColumn = READY_FOR_REVIEW_COLUMN;

  return moveProjectCard({ pull_number, originColumn, destinationColumn });
};
