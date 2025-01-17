import { Alert, Button, Heading as NavHeading } from '@navikt/ds-react'
import { AxiosResponse } from 'axios'
import classNames from 'classnames'
import React from 'react'

import { fjernGjennomforingFraOversikten } from '../../../api/api'
import { Show } from '../../../component/Show'
import globalStyles from '../../../globals.module.scss'
import {
	isFinished,
	isNotStartedOrPending,
	isPending,
	isRejected,
	isResolved,
	usePromise
} from '../../../utils/use-promise'
import styles from './Heading.module.scss'

interface HeadingProps {
	gjennomforingNavn: string,
	gjennomforingId: string
}

export const Heading = (props: HeadingProps) => {
	const fjernFraOversiktenPromise = usePromise<AxiosResponse>()

	const handleFjernFraMinOversikt = () => {
		fjernFraOversiktenPromise.setPromise(() => fjernGjennomforingFraOversikten(props.gjennomforingId))
	}

	return (
		<div className={styles.heading}>
			<NavHeading size="medium">{props.gjennomforingNavn}</NavHeading>

			<Show if={isNotStartedOrPending(fjernFraOversiktenPromise)}>
				<Button
					variant="secondary"
					size="small"
					onClick={handleFjernFraMinOversikt}
					className={classNames(styles.fjernKnapp, globalStyles.blokkXs)}
					loading={isPending(fjernFraOversiktenPromise)}
					disabled={isPending(fjernFraOversiktenPromise) || isResolved(fjernFraOversiktenPromise)}
				>
					Fjern fra min oversikt
				</Button>
			</Show>

			<Show if={isFinished(fjernFraOversiktenPromise)}>
				{
					isResolved(fjernFraOversiktenPromise) &&
					(<Alert variant="success" size="small" className={styles.alert}>Fjernet fra min oversikt</Alert>)
				}

				{
					isRejected(fjernFraOversiktenPromise) &&
					(<Alert variant="error" size="small" className={styles.alert}>Noe gikk galt</Alert>)
				}
			</Show>
		</div>
	)
}