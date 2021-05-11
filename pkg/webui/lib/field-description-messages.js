// Copyright © 2021 The Things Network Foundation, The Things Industries B.V.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { defineMessages } from 'react-intl'

import GLOSSARY_IDS from '@ttn-lw/lib/constants/glossary-ids'

const m = defineMessages({
  freqPlanDescription:
    'A Frequency Plan defines data rates and channels which comply with the LoRaWAN Regional Parameters for a band or geographical area.',
  freqPlanLocation:
    'You need to choose a Frequency Plan which adheres to the local regulations of where your end device is located. It is also important that the gateways in reach of this end device use the same Frequency Plan.',

  devEuiDescription: 'A 64 bit extended unique identifier for your end device.',
  devEuiLocation:
    'It should be provided to you by the manufacturer, or printed on the end device packaging.',
  devEuiAbsence: 'Contact the manufacturer or your reseller.',

  joinEuiDescription:
    'The JoinEUI (formerly called AppEUI) is a 64 bit extended unique identifier used to identify the Join Server during activation.',
  joinEuiLocation:
    'It should be provided by the end device manufacturer for pre-provisioned end devices, or by the owner of the Join Server you will use.',
  joinEuiAbsence:
    'Contact the manufacturer or your reseller. If they can not provide a JoinEUI, and your end device is programmable, it is okay to use all-zeros, but ensure that you use the same JoinEUI in your device as you enter in The Things Stack.',

  appKeyDescription:
    'An end device specific encryption key used during OTAA to derive the AppSKey (in LoRaWAN 1.1x) or both the NwkSKey and AppSKey in LoRaWAN 1.0x.',
  appKeyLocation:
    'It is usually pre-provisioned by the end device manufacturer, but can also be created by the user.',
  appKeyAbsence:
    'Contact the manufacturer or your reseller. If they cannot provide an AppKey, and your end device is programmable, it is okay to generate one.',

  nwkKeyDescription:
    'A device specific encryption key used to derive the FNwkSIntKey, SNwkSIntKey, NwkSEncKey in LoRaWAN 1.1. When a LoRaWAN 1.1 capable device connects to a LoRaWAN 1.0x Network Server which does not support dual root keys (NwkKey and AppKey), the NwkKey value is used as the AppKey value.',
  nwkKeyLocation:
    'It is usually pre-provisioned by the end device manufacturer, but some end devices also allow using a user-defined value.',
  nwkKeyAbsence:
    'Contact the manufacturer or your reseller. If they cannot provide an AppKey, and your end device is programmable, it is okay to generate one.',

  devIdDescription: 'A unique, human-readable identifier for your end device.',
  devIdLocation:
    'You can make it up, so be creative. End device IDs can not be reused by multiple end devices within the same application.',

  joinServerDescription:
    "The Join Server's role is to store root keys, generate session keys, and to send those securely to the Network Server and Application Server of choice. The device contains the same root keys, which can be provisioned as part of assembly, distribution or upon installation.",
  joinServerLocation:
    'Contact your manufacturer or reseller to find out if your end device is pre-provisioned on an external Join Server. If not, you may use the local Join Server, or provision the end device on our Global Join Server so that you can transfer it without lock-in.',
  joinServerAbsence:
    'If the end device is pre-provisioned, you will need the keys from the manufacturer to activate it.',

  devAddrDescription:
    'A 32 bit non-unique identifier, assigned by the Network Server during end device activation.',
  devAddrLocation:
    'For Activation-By-Personalization (ABP), you must generate a device address and manually program it into the end device. You can use the generate button next to the input field to generate a device address.',

  appSKeyDescription:
    'After activation, this encryption key is used to secure messages which carry a payload.',
  appSKeyLocation:
    'For Activation-By-Personalization (ABP), you must generate a key and manually program it into your end device. You can use the generate button next to the input field to generate a key.',

  nwkSKeyDescription:
    'After activation, this encryption key is used to secure messages which do not carry a payload.',
  nwkSKeyLocation:
    'For OTAA, it is created by the Network Server. If using ABP, you must create one and manually enter it in the end device and The Things Stack.',

  lwVersionDescription:
    'The LoRa Alliance LoRaWAN specification your end device conforms to, which defines which Media Access Control (MAC) features it supports.',
  lwVersionLocation:
    'The LoRaWAN version for your end device should be provided by the manufacturer in a datasheet as LoRaWAN version or LoRaWAN specification',
  lwVersionAbsence:
    'Contact your manufacturer or reseller, since specifying the wrong version can lead to complex issues when the Network Server provides the end device with unsupported configuration (MAC) commands.',

  regParameterDescription:
    'The Regional Parameters specify frequency, dwell time, and other communication settings for different geographical areas. The Regional Parameters version is the version of the LoRa Alliance specification which your device supports.',
  regParameterLocation:
    'The Regional Parameters version should be provided by the end device manufacturer in a datasheet.',
  regParameterAbsence:
    'Contact your manufacturer or reseller to obtain the correct specification. Specifying a wrong version can lead to complex issues when the Network Server provides the end device with unsupported configuration (MAC) commands.',

  classDescription:
    'The LoRaWAN specification defines three end device types. All LoRaWAN end devices must implement Class A, whereas Class B and Class C are extensions to the specification of Class A devices that specify different downlink reception behavior.',
  classLocation:
    'The class capabilities of your end device should be provided by the manufaturer in a datasheet.',
  classAbsence:
    'If your end device will not receive downlink messages, you can safely use Class A, which all LoRaWAN certified devices must implement. Otherwise contact your manufacturer or reseller.',

  rx1DataRateOffsetDescription:
    'The Data Rate Offset sets the offset between the uplink data rate and the downlink data rate used to communicate with the End Device during the first reception slot (RX1).',

  deviceBrandDescription: 'This is the manufacturer of your end device.',
  deviceModelDescription: 'The particular model of your end device.',
  deviceHardwareVersionDescription: 'The hardware version of your device.',
  deviceHardwareVersionLocation:
    'It should be provided by the manufacturer of your device, or printed on the device packaging.',
  deviceHardwareVersionAbsence: 'Contact the manufacturer or reseller of your device.',
  deviceFirmwareVersionDescription: 'The version of firmware loaded on your device.',
  deviceFirmwareVersionLocation:
    'The firmware version should be provided by the manufacturer of your device, or printed on the device packaging. It may be possible to upgrade your device firmware to a known version.',
  deviceFirmwareVersionAbsence: 'Contact the manufacturer or reseller of your device.',
  activationModeDescription:
    'OTAA is the preferred and most secure way to connect a device. Devices perform a join-procedure with the network. ABP requires hardcoding the device address and security keys. Multicast is a virtual group of ABP devices which allows all devices to receive the same downlinks. Multicast groups do not support uplinks.',
  activationModeLocation: 'You decide how to activate your devices. Whenever possible, use OTAA.',
  deviceNameDescription: 'An optional human readable name to help you identify your device.',
  deviceNameLocation: 'You make it up, so be creative!',
  deviceDescDescription:
    'An optional description, which can also be used to save notes about the end device.',
  frameCounterWidthDescription:
    'Most devices use a 32 bit frame counter to prevent replay attacks. Devices with extremely limited resources are permitted to use 16 bit counters.',
  frameCounterWidthLocation: 'It should be provided by the device manufacturer.',
  frameCounterWidthAbsence:
    'Contact your manufacturer or reseller. Most devices use 32 bit counters. Selecting the wrong value will produce errors once the Up or Down frame counter exceeds 16 bits and rolls over.',
  rx2DataRateIndexDescription: 'The data rate used for the RX2 receive window.',
  rx2DataRateIndexLocation:
    'This should be provided by the device manufacturer. It will also automatically configured by the network for OTAA devices.',
  rx2DataRateIndexAbsence:
    'Contact your device manufacturer or reseller. For OTAA, this does not need to be manually set and can be ignored.',
  rx2FrequencyDescription: 'The frequency used for the RX2 receive window.',
  rx2FrequencyLocation:
    'This should be provided by the device manufacturer. It will also automatically configured by the network for OTAA devices.',
  rx2FrequencyAbsence:
    'Contact your device manufacturer or reseller. For OTAA, this does not need to be manually set and can be ignored.',
  gatewayIdDescription: 'A unique identifier for your gateway.',
  gatewayIdLocation: 'You make it up, so be creative!',
  gatewayEuiDescription: 'A 64 bit extended unique identifier for your end device.',
  gatewayEuiLocation:
    'It should be provided to you by the manufacturer, or printed on the gateway packaging.',
  gatewayEuiAbsence: 'Contact the manufacturer or reseller.',
  gatewayNameDescription: 'An optional human readable name to help you identify your gateway.',
  gatewayNameLocation: 'You make it up, so be creative!',
  gatewayDescDescription:
    'An optional description, which can also be used to save notes about the gateway.',
  requireAuthenticatedConnectionDescription:
    'This will only allow a gateway to connect if it uses a TLS enabled Basic Station or MQTT connection. It will not allow connections from UDP packet forwarders.',
  gatewayStatusDescription:
    'This allows information about the gateway to be shared publicly - the location, for example, to display on maps of publicly available LoRaWAN gateways.',
  gatewayAttributesDescription:
    'Attributes can be used to set arbitrary information about the entity, to be used by scripts, or simply for your own organization.',
  scheduleDownlinkLateDescription:
    'This legacy feature enables buffering of downlink messages on the network server, for gateways with no downlink queue. Scheduling consecutive downlinks on gateways with no queue will cause only the most recent downlink to be stored.',
  dutyCycleDescription:
    'When checked, the Network Server will only schedule messages respecting the duty cycle limitations of the selected frequency plan.',
  scheduleAnytimeDelayDescription:
    'Adjust the time that the Network Server schedules class C messages in advance. This is useful for gateways that have a known high latency backhaul, like 3G and satellite.',
})

const descriptions = Object.freeze({
  [GLOSSARY_IDS.FREQUENCY_PLAN]: {
    description: m.freqPlanDescription,
    location: m.freqPlanLocation,
  },
  [GLOSSARY_IDS.DEV_EUI]: {
    description: m.devEuiDescription,
    location: m.devEuiLocation,
    absence: m.devEuiAbsence,
  },
  [GLOSSARY_IDS.JOIN_EUI]: {
    description: m.joinEuiDescription,
    location: m.joinEuiLocation,
    absence: m.joinEuiAbsence,
  },
  [GLOSSARY_IDS.APP_KEY]: {
    description: m.appKeyDescription,
    location: m.appKeyLocation,
    absence: m.appKeyAbsence,
  },
  [GLOSSARY_IDS.NETWORK_KEY]: {
    description: m.nwkKeyDescription,
    location: m.nwkKeyLocation,
    absence: m.nwkKeyAbsence,
  },
  [GLOSSARY_IDS.DEVICE_ID]: {
    description: m.devIdDescription,
    location: m.devIdLocation,
  },
  [GLOSSARY_IDS.JOIN_SERVER]: {
    description: m.joinServerDescription,
    location: m.joinServerLocation,
    absence: m.joinServerAbsence,
  },
  [GLOSSARY_IDS.DEVICE_ADDRESS]: {
    description: m.devAddrDescription,
    location: m.devAddrLocation,
  },
  [GLOSSARY_IDS.APP_SESSION_KEY]: {
    description: m.appSKeyDescription,
    location: m.appSKeyLocation,
  },
  [GLOSSARY_IDS.NETWORK_SESSION_KEY]: {
    description: m.nwkSKeyDescription,
    location: m.nwkSKeyLocation,
  },
  [GLOSSARY_IDS.LORAWAN_VERSION]: {
    description: m.lwVersionDescription,
    location: m.lwVersionLocation,
    absence: m.lwVersionAbsence,
  },
  [GLOSSARY_IDS.REGIONAL_PARAMETERS]: {
    description: m.regParameterDescription,
    location: m.regParameterLocation,
    absence: m.regParameterAbsence,
  },
  [GLOSSARY_IDS.CLASSES]: {
    description: m.classDescription,
    location: m.classLocation,
    absence: m.classAbsence,
  },
  [GLOSSARY_IDS.DATA_RATE_OFFSET]: {
    description: m.rx1DataRateOffsetDescription,
  },
  [GLOSSARY_IDS.DEVICE_BRAND]: {
    description: m.deviceBrandDescription,
  },
  [GLOSSARY_IDS.DEVICE_MODEL]: {
    description: m.deviceModelDescription,
  },
  [GLOSSARY_IDS.DEVICE_HARDWARE_VERSION]: {
    description: m.deviceHardwareVersionDescription,
    location: m.deviceHardwareVersionLocation,
    absence: m.deviceHardwareVersionAbsence,
  },
  [GLOSSARY_IDS.DEVICE_FIRMWARE_VERSION]: {
    description: m.deviceFirmwareVersionDescription,
    location: m.deviceFirmwareVersionLocation,
    absence: m.deviceFirmwareVersionAbsence,
  },
  [GLOSSARY_IDS.ACTIVATION_MODE]: {
    description: m.activationModeDescription,
    location: m.activationModeLocation,
  },
  [GLOSSARY_IDS.DEVICE_NAME]: {
    description: m.deviceNameDescription,
    location: m.deviceNameLocation,
  },
  [GLOSSARY_IDS.DEVICE_DESCRIPTION]: {
    description: m.deviceDescDescription,
  },
  [GLOSSARY_IDS.FRAME_COUNTER_WIDTH]: {
    description: m.frameCounterWidthDescription,
    location: m.frameCounterWidthLocation,
    absence: m.frameCounterWidthAbsence,
  },
  [GLOSSARY_IDS.RX2_DATA_RATE_INDEX]: {
    description: m.rx2DataRateIndexDescription,
    location: m.rx2DataRateIndexLocation,
    absence: m.rx2DataRateIndexAbsence,
  },
  [GLOSSARY_IDS.RX2_FREQUENCY]: {
    description: m.rx2FrequencyDescription,
    location: m.rx2FrequencyLocation,
    absence: m.rx2FrequencyAbsence,
  },
  [GLOSSARY_IDS.GATEWAY_ID]: {
    description: m.gatewayIdDescription,
    location: m.gatewayIdLocation,
  },
  [GLOSSARY_IDS.GATEWAY_EUI]: {
    description: m.gatewayEuiDescription,
    location: m.gatewayEuiLocation,
    absence: m.gatewayEuiAbsence,
  },
  [GLOSSARY_IDS.GATEWAY_NAME]: {
    description: m.gatewayNameDescription,
    location: m.gatewayNameLocation,
  },
  [GLOSSARY_IDS.GATEWAY_DESCRIPTION]: {
    description: m.gatewayDescDescription,
  },
  [GLOSSARY_IDS.REQUIRE_AUTHENTICATED_CONNECTION]: {
    description: m.requireAuthenticatedConnectionDescription,
  },
  [GLOSSARY_IDS.GATEWAY_STATUS]: {
    description: m.gatewayStatusDescription,
  },
  [GLOSSARY_IDS.GATEWAY_ATTRIBUTES]: {
    description: m.gatewayAttributesDescription,
  },
  [GLOSSARY_IDS.SCHEDULE_DOWNLINK_LATE]: {
    description: m.scheduleDownlinkLateDescription,
  },
  [GLOSSARY_IDS.DUTY_CYCLE]: {
    description: m.dutyCycleDescription,
  },
  [GLOSSARY_IDS.SCHEDULE_ANYTIME_DELAY]: {
    description: m.scheduleAnytimeDelayDescription,
  },
})

const links = Object.freeze({
  [GLOSSARY_IDS.FREQUENCY_PLAN]: {
    documentationPath: '/reference/frequency-plans',
  },
  [GLOSSARY_IDS.GATEWAY_ID]: {
    documentationPath: '/reference/id-eui-constraints',
  },
  [GLOSSARY_IDS.GATEWAY_EUI]: {
    documentationPath: '/reference/id-eui-constraints',
  },
})

export { descriptions, links }
