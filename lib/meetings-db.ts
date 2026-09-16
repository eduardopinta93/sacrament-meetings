import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-08-23',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    announcements: [
      'Ward temple night: August 29',
      'Youth activity on Wednesday at 7:00 PM',
    ],
    openingHymn: {
      number: 2,
      title: 'The Spirit of God',
    },
    openingPrayer: 'Sister Williams',
    wardBusiness: [
      {
        description: 'Sustaining of new Primary president',
      },
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 169,
      title: 'As Now We Take the Sacrament',
    },
    speakers: [
      {
        name: 'Sister Brown',
        topic: 'Faith in Jesus Christ',
        type: 'speaker',
      },
      {
        name: 'Brother Davis',
        topic: 'Service',
        type: 'speaker',
      },
    ],
    closingHymn: {
      number: 31,
      title: 'O God, Our Help in Ages Past',
    },
    closingPrayer: 'Brother Wilson',
  },
  {
    id: 2,
    date: '2026-08-30',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Taylor',
    announcements: [
      'Ward picnic on Saturday at 12:00 PM',
    ],
    openingHymn: {
      number: 85,
      title: 'How Firm a Foundation',
    },
    openingPrayer: 'Brother Anderson',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 170,
      title: 'God, Our Father, Hear Us Pray',
    },
    speakers: [
      {
        name: 'Sister Clark',
        topic: 'Following the Savior',
        type: 'speaker',
      },
      {
        name: 'Ward Choir',
        topic: 'Come, Follow Me',
        type: 'musical-number',
      },
      {
        name: 'Brother Lewis',
        topic: 'Personal Revelation',
        type: 'speaker',
      },
    ],
    closingHymn: {
      number: 301,
      title: 'I Am a Child of God',
    },
    closingPrayer: 'Sister Martin',
  },
  {
    id: 3,
    date: '2026-09-06',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    announcements: [
      'Fast offering donations may be given today',
    ],
    openingHymn: {
      number: 5,
      title: 'High on the Mountain Top',
    },
    openingPrayer: 'Sister Harris',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 172,
      title: 'In Humility, Our Savior',
    },
    speakers: [
      {
        name: 'Congregation',
        topic: 'Fast and testimony meeting',
        type: 'speaker',
      },
    ],
    closingHymn: {
      number: 136,
      title: 'I Know That My Redeemer Lives',
    },
    closingPrayer: 'Brother Young',
  },
  {
    id: 4,
    date: '2026-09-13',
    meetingType: 'stake',
    presiding: 'President Johnson',
    conducting: 'President Miller',
    announcements: [
      'Stake conference sessions continue this afternoon',
    ],
    openingHymn: {
      number: 6,
      title: 'Redeemer of Israel',
    },
    openingPrayer: 'Sister Thompson',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: {
      number: 169,
      title: 'As Now We Take the Sacrament',
    },
    speakers: [
      {
        name: 'President Miller',
        topic: 'Strengthening Families',
        type: 'speaker',
      },
      {
        name: 'Stake Choir',
        topic: 'Faith in Every Footstep',
        type: 'musical-number',
      },
      {
        name: 'President Johnson',
        topic: 'Discipleship',
        type: 'speaker',
      },
    ],
    closingHymn: {
      number: 134,
      title: 'I Believe in Christ',
    },
    closingPrayer: 'Brother White',
  },
  {
    id: 5,
    date: '2026-09-20',
    meetingType: 'general',
    presiding: 'Bishop Smith',
    conducting: 'Brother Taylor',
    announcements: [
      'General conference broadcast information is available online',
    ],
    openingHymn: {
      number: 3,
      title: 'Now Let Us Rejoice',
    },
    openingPrayer: 'Sister Moore',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 171,
      title: 'With Humble Heart',
    },
    speakers: [
      {
        name: 'General Conference Broadcast',
        topic: 'General session',
        type: 'speaker',
      },
    ],
    closingHymn: {
      number: 152,
      title: 'God Be with You Till We Meet Again',
    },
    closingPrayer: 'Brother Hall',
  },
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) {
    return meetings.filter((meeting) => meeting.date === date);
  }

  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find((meeting) => meeting.id === id) ?? null;
}