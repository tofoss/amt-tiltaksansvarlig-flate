import faker from 'faker'

import { DeltakerStatusAarsakType,Endringsmelding, EndringsmeldingStatus, EndringsmeldingType, MeldingerFraArrangor, Vurdering, Vurderingstype } from '../api/schema/meldinger'

const vurderingerData: Vurdering[] = [
	{
		id: faker.datatype.uuid(),
		deltaker: {
			fornavn: 'Harry',
			mellomnavn: null,
			etternavn: 'Helved',
			fodselsnummer: '03035512347',
			erSkjermet: false
		},
		vurderingstype: Vurderingstype.OPPFYLLER_KRAVENE,
		opprettetDato: faker.date.recent(),
		begrunnelse: null
	},
	{
		id: faker.datatype.uuid(),
		deltaker: {
			fornavn: 'Kråkvar',
			mellomnavn: null,
			etternavn: 'Grytidlig',
			fodselsnummer: '03035512347',
			erSkjermet: false
		},
		vurderingstype: Vurderingstype.OPPFYLLER_IKKE_KRAVENE,
		opprettetDato: faker.date.recent(),
		begrunnelse: 'Personen oppfyller ikke kravene'
	},
	{
		id: faker.datatype.uuid(),
		deltaker: {
			fornavn: 'Tor',
			mellomnavn: 'Peder',
			etternavn: 'Ring',
			fodselsnummer: '03035512347',
			erSkjermet: false
		},
		vurderingstype: Vurderingstype.OPPFYLLER_KRAVENE,
		opprettetDato: faker.date.recent(),
		begrunnelse: null
	},
	{
		id: faker.datatype.uuid(),
		deltaker: {
			fornavn: 'William',
			mellomnavn: 'Spare',
			etternavn: 'Bolt',
			fodselsnummer: '03035512347',
			erSkjermet: true
		},
		vurderingstype: Vurderingstype.OPPFYLLER_KRAVENE,
		opprettetDato: faker.date.recent(),
		begrunnelse: null
	},
	{
		id: faker.datatype.uuid(),
		deltaker: {
			fornavn: null,
			mellomnavn: null,
			etternavn: null,
			fodselsnummer: null,
			erSkjermet: true
		},
		vurderingstype: Vurderingstype.OPPFYLLER_IKKE_KRAVENE,
		opprettetDato: faker.date.recent(),
		begrunnelse: 'Personen oppfyller ikke kravene'
	}
]

const endringsmeldingData: Endringsmelding[] = [
	{
		id: faker.datatype.uuid(),
		deltaker: {
			fornavn: 'Lur',
			mellomnavn: 'Lutlei',
			etternavn: 'Luresen',
			fodselsnummer: '03035512347',
			erSkjermet: false
		},
		type: EndringsmeldingType.ENDRE_OPPSTARTSDATO,
		status: EndringsmeldingStatus.AKTIV,
		innhold: { oppstartsdato: null },
		opprettetDato: faker.date.recent()
	},
	{
		id: faker.datatype.uuid(),
		deltaker: {
			fornavn: null,
			mellomnavn: null,
			etternavn: null,
			fodselsnummer: null,
			erSkjermet: true
		},
		type: EndringsmeldingType.ENDRE_OPPSTARTSDATO,
		status: EndringsmeldingStatus.AKTIV,
		innhold: { oppstartsdato: faker.date.soon() },
		opprettetDato: faker.date.recent()
	},
	{
		id: faker.datatype.uuid(),
		deltaker: {
			fornavn: 'Lur',
			mellomnavn: 'Lutlei',
			etternavn: 'Luresen',
			fodselsnummer: '03035512347',
			erSkjermet: false
		},
		type: EndringsmeldingType.LEGG_TIL_OPPSTARTSDATO,
		status: EndringsmeldingStatus.AKTIV,
		innhold: { oppstartsdato: faker.date.soon() },
		opprettetDato: faker.date.recent()
	},
	{
		id: faker.datatype.uuid(),
		deltaker: {
			fornavn: 'Nataniel',
			mellomnavn: null,
			etternavn: 'Wood',
			fodselsnummer: '13018812347',
			erSkjermet: false
		},
		type: EndringsmeldingType.FORLENG_DELTAKELSE,
		status: EndringsmeldingStatus.AKTIV,
		innhold: { sluttdato: faker.date.soon() },
		opprettetDato: faker.date.recent()
	},
	{
		id: faker.datatype.uuid(),
		deltaker: {
			fornavn: 'Mira',
			mellomnavn: null,
			etternavn: 'Bowler',
			fodselsnummer: '07099512347',
			erSkjermet: false
		},
		type: EndringsmeldingType.AVSLUTT_DELTAKELSE,
		status: EndringsmeldingStatus.AKTIV,
		innhold: {
			sluttdato: faker.date.soon(),
			aarsak: {
				type: DeltakerStatusAarsakType.ANNET,
				beskrivelse: 'Har flyttet til annen kommune'
			}
		},
		opprettetDato: faker.date.recent()
	},
	{
		id: faker.datatype.uuid(),
		deltaker: {
			fornavn: 'Amelia',
			mellomnavn: null,
			etternavn: 'Hunter',
			fodselsnummer: '01108511382',
			erSkjermet: false
		},
		type: EndringsmeldingType.DELTAKER_IKKE_AKTUELL,
		status: EndringsmeldingStatus.AKTIV,
		innhold: { aarsak: { type: DeltakerStatusAarsakType.FEILREGISTRERT, beskrivelse: null } },
		opprettetDato: faker.date.recent()
	},
	{
		id: faker.datatype.uuid(),
		deltaker: {
			fornavn: 'Lur',
			mellomnavn: 'Lutlei',
			etternavn: 'Luresen',
			fodselsnummer: '03035512347',
			erSkjermet: false
		},
		type: EndringsmeldingType.ENDRE_OPPSTARTSDATO,
		status: EndringsmeldingStatus.UTFORT,
		innhold: { oppstartsdato: faker.date.past() },
		opprettetDato: faker.date.recent()
	},
	{
		id: faker.datatype.uuid(),
		deltaker: {
			fornavn: 'Lur',
			mellomnavn: 'Lutlei',
			etternavn: 'Luresen',
			fodselsnummer: '03035512347',
			erSkjermet: false
		},
		type: EndringsmeldingType.ENDRE_OPPSTARTSDATO,
		status: EndringsmeldingStatus.UTDATERT,
		innhold: { oppstartsdato: faker.date.past() },
		opprettetDato: faker.date.recent()
	},
	{
		id: faker.datatype.uuid(),
		deltaker: {
			fornavn: 'Amelia',
			mellomnavn: null,
			etternavn: 'Hunter',
			fodselsnummer: '01108511382',
			erSkjermet: false
		},
		type: EndringsmeldingType.DELTAKER_IKKE_AKTUELL,
		status: EndringsmeldingStatus.AKTIV,
		innhold: { aarsak: { type: DeltakerStatusAarsakType.OPPFYLLER_IKKE_KRAVENE, beskrivelse: 'Har ikke fullført grunnleggende førstehjelpskurs' } },
		opprettetDato: faker.date.recent()
	},
	{
		id: faker.datatype.uuid(),
		deltaker: {
			fornavn: 'Lur',
			mellomnavn: 'Lutlei',
			etternavn: 'Luresen',
			fodselsnummer: '03035512347',
			erSkjermet: false
		},
		type: EndringsmeldingType.AVSLUTT_DELTAKELSE,
		status: EndringsmeldingStatus.TILBAKEKALT,
		innhold: { sluttdato: faker.date.past(), aarsak: { type: DeltakerStatusAarsakType.SYK, beskrivelse: null } },
		opprettetDato: faker.date.recent()
	},
	{
		id: faker.datatype.uuid(),
		deltaker: {
			fornavn: 'Lur',
			mellomnavn: 'Lutlei2',
			etternavn: 'Luresen',
			fodselsnummer: '03035512347',
			erSkjermet: true
		},
		type: EndringsmeldingType.ENDRE_DELTAKELSE_PROSENT,
		status: EndringsmeldingStatus.AKTIV,
		innhold: { deltakelseProsent: 64, dagerPerUke: 3, gyldigFraDato: faker.date.soon() },
		opprettetDato: faker.date.recent()
	},
	{
		id: faker.datatype.uuid(),
		deltaker: {
			fornavn: 'Lur',
			mellomnavn: 'Lutlei2',
			etternavn: 'Luresen',
			fodselsnummer: '03035512347',
			erSkjermet: false
		},
		type: EndringsmeldingType.DELTAKER_ER_AKTUELL,
		status: EndringsmeldingStatus.AKTIV,
		innhold: null,
		opprettetDato: faker.date.recent()
	},
	{
		id: faker.datatype.uuid(),
		deltaker: {
			fornavn: 'Lur',
			mellomnavn: 'Lutlei2',
			etternavn: 'Luresen',
			fodselsnummer: '03035512347',
			erSkjermet: false
		},
		type: EndringsmeldingType.ENDRE_SLUTTDATO,
		status: EndringsmeldingStatus.AKTIV,
		innhold: { sluttdato: faker.date.future() },
		opprettetDato: faker.date.recent()
	},
	{
		id: faker.datatype.uuid(),
		deltaker: {
			fornavn: 'Nataniel',
			mellomnavn: null,
			etternavn: 'Wood',
			fodselsnummer: '13018812347',
			erSkjermet: false
		},
		type: EndringsmeldingType.ENDRE_DELTAKELSE_PROSENT,
		status: EndringsmeldingStatus.AKTIV,
		innhold: { deltakelseProsent: 100, dagerPerUke: 5, gyldigFraDato: faker.date.soon() },
		opprettetDato: faker.date.recent()
	}
]

export const meldingeData: MeldingerFraArrangor = {
	endringsmeldinger: endringsmeldingData,
	vurderinger: vurderingerData
}