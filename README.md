<!--

This file gets generated via 'bin/README-template.md'
do not change README.md, change the template instead!

-->

# @magic/mime-types

exports all mime-db mimetypes that have file extensions.

exports a key => value store,

where key = extension and value = mime/type

[html-docs](https://magic.github.io/mime-types)

### installation
be in a nodejs project
```bash
npm install --save-exact @magic/mime-types
```

### recreate README.md
**README.md should never be changed manually.**
run
```bash
./bin/bin.mjs docs
```
to rebuild the file.

### usage:
in yourproject.js

```javascript
import defaultMimes, { mimes, compressibles } from '@magic/mime-types'
```

very detailed usage below

## Dev

### recreate src/index.mjs
**src/index.mjs should never be changed manually.**
run
```bash
./bin/bin.mjs build
```
to rebuild the file.

### changelog

#### 0.0.1
first publish

#### 0.0.2
* required node version is >= 13.5.0
* update mime-db

#### 0.0.3
bump required node version to 14.2.0

#### 0.0.4
small change

#### 0.0.5
* bin now only builds, no commands needed.
* build only loops once.
* update documentation.

#### 0.0.6 - unreleased
...


### import / usage
```javascript
import mimes from '@magic/mime-types'

mimes.ez === 'application/andrew-inset'

mimes.aw === 'application/applixware'

mimes.atom === 'application/atom+xml'

mimes.atomcat === 'application/atomcat+xml'

mimes.atomdeleted === 'application/atomdeleted+xml'

mimes.atomsvc === 'application/atomsvc+xml'

mimes.dwd === 'application/atsc-dwd+xml'

mimes.held === 'application/atsc-held+xml'

mimes.rsat === 'application/atsc-rsat+xml'

mimes.bdoc === 'application/bdoc'

mimes.xcs === 'application/calendar+xml'

mimes.ccxml === 'application/ccxml+xml'

mimes.cdfx === 'application/cdfx+xml'

mimes.cdmia === 'application/cdmi-capability'

mimes.cdmic === 'application/cdmi-container'

mimes.cdmid === 'application/cdmi-domain'

mimes.cdmio === 'application/cdmi-object'

mimes.cdmiq === 'application/cdmi-queue'

mimes.cu === 'application/cu-seeme'

mimes.mpd === 'application/dash+xml'

mimes.davmount === 'application/davmount+xml'

mimes.dbk === 'application/docbook+xml'

mimes.dssc === 'application/dssc+der'

mimes.xdssc === 'application/dssc+xml'

mimes.ecma === 'application/ecmascript'

mimes.es === 'application/ecmascript'

mimes.emma === 'application/emma+xml'

mimes.emotionml === 'application/emotionml+xml'

mimes.epub === 'application/epub+zip'

mimes.exi === 'application/exi'

mimes.fdt === 'application/fdt+xml'

mimes.pfr === 'application/font-tdpfr'

mimes.geojson === 'application/geo+json'

mimes.gml === 'application/gml+xml'

mimes.gpx === 'application/gpx+xml'

mimes.gxf === 'application/gxf'

mimes.gz === 'application/gzip'

mimes.hjson === 'application/hjson'

mimes.stk === 'application/hyperstudio'

mimes.ink === 'application/inkml+xml'

mimes.inkml === 'application/inkml+xml'

mimes.ipfix === 'application/ipfix'

mimes.its === 'application/its+xml'

mimes.jar === 'application/java-archive'

mimes.war === 'application/java-archive'

mimes.ear === 'application/java-archive'

mimes.ser === 'application/java-serialized-object'

mimes.class === 'application/java-vm'

mimes.js === 'application/javascript'

mimes.mjs === 'application/javascript'

mimes.json === 'application/json'

mimes.map === 'application/json'

mimes.json5 === 'application/json5'

mimes.jsonml === 'application/jsonml+json'

mimes.jsonld === 'application/ld+json'

mimes.lgr === 'application/lgr+xml'

mimes.lostxml === 'application/lost+xml'

mimes.hqx === 'application/mac-binhex40'

mimes.cpt === 'application/mac-compactpro'

mimes.mads === 'application/mads+xml'

mimes.webmanifest === 'application/manifest+json'

mimes.mrc === 'application/marc'

mimes.mrcx === 'application/marcxml+xml'

mimes.ma === 'application/mathematica'

mimes.nb === 'application/mathematica'

mimes.mb === 'application/mathematica'

mimes.mathml === 'application/mathml+xml'

mimes.mbox === 'application/mbox'

mimes.mscml === 'application/mediaservercontrol+xml'

mimes.metalink === 'application/metalink+xml'

mimes.meta4 === 'application/metalink4+xml'

mimes.mets === 'application/mets+xml'

mimes.maei === 'application/mmt-aei+xml'

mimes.musd === 'application/mmt-usd+xml'

mimes.mods === 'application/mods+xml'

mimes.m21 === 'application/mp21'

mimes.mp21 === 'application/mp21'

mimes.mp4s === 'application/mp4'

mimes.m4p === 'application/mp4'

mimes.xdf === 'application/mrb-consumer+xml'

mimes.xdf === 'application/mrb-publish+xml'

mimes.doc === 'application/msword'

mimes.dot === 'application/msword'

mimes.mxf === 'application/mxf'

mimes.nq === 'application/n-quads'

mimes.nt === 'application/n-triples'

mimes.cjs === 'application/node'

mimes.bin === 'application/octet-stream'

mimes.dms === 'application/octet-stream'

mimes.lrf === 'application/octet-stream'

mimes.mar === 'application/octet-stream'

mimes.so === 'application/octet-stream'

mimes.dist === 'application/octet-stream'

mimes.distz === 'application/octet-stream'

mimes.pkg === 'application/octet-stream'

mimes.bpk === 'application/octet-stream'

mimes.dump === 'application/octet-stream'

mimes.elc === 'application/octet-stream'

mimes.deploy === 'application/octet-stream'

mimes.exe === 'application/x-msdos-program'

mimes.dll === 'application/octet-stream'

mimes.deb === 'application/x-debian-package'

mimes.dmg === 'application/octet-stream'

mimes.iso === 'application/octet-stream'

mimes.img === 'application/octet-stream'

mimes.msi === 'application/octet-stream'

mimes.msp === 'application/octet-stream'

mimes.msm === 'application/octet-stream'

mimes.buffer === 'application/octet-stream'

mimes.oda === 'application/oda'

mimes.opf === 'application/oebps-package+xml'

mimes.ogx === 'application/ogg'

mimes.omdoc === 'application/omdoc+xml'

mimes.onetoc === 'application/onenote'

mimes.onetoc2 === 'application/onenote'

mimes.onetmp === 'application/onenote'

mimes.onepkg === 'application/onenote'

mimes.oxps === 'application/oxps'

mimes.relo === 'application/p2p-overlay+xml'

mimes.xer === 'application/patch-ops-error+xml'

mimes.pdf === 'application/pdf'

mimes.pgp === 'application/pgp-encrypted'

mimes.asc === 'application/pgp-signature'

mimes.sig === 'application/pgp-signature'

mimes.prf === 'application/pics-rules'

mimes.p10 === 'application/pkcs10'

mimes.p7m === 'application/pkcs7-mime'

mimes.p7c === 'application/pkcs7-mime'

mimes.p7s === 'application/pkcs7-signature'

mimes.p8 === 'application/pkcs8'

mimes.ac === 'application/pkix-attr-cert'

mimes.cer === 'application/pkix-cert'

mimes.crl === 'application/pkix-crl'

mimes.pkipath === 'application/pkix-pkipath'

mimes.pki === 'application/pkixcmp'

mimes.pls === 'application/pls+xml'

mimes.ai === 'application/postscript'

mimes.eps === 'application/postscript'

mimes.ps === 'application/postscript'

mimes.provx === 'application/provenance+xml'

mimes.cww === 'application/prs.cww'

mimes.pskcxml === 'application/pskc+xml'

mimes.raml === 'application/raml+yaml'

mimes.rdf === 'application/rdf+xml'

mimes.owl === 'application/rdf+xml'

mimes.rif === 'application/reginfo+xml'

mimes.rnc === 'application/relax-ng-compact-syntax'

mimes.rl === 'application/resource-lists+xml'

mimes.rld === 'application/resource-lists-diff+xml'

mimes.rs === 'application/rls-services+xml'

mimes.rapd === 'application/route-apd+xml'

mimes.sls === 'application/route-s-tsid+xml'

mimes.rusd === 'application/route-usd+xml'

mimes.gbr === 'application/rpki-ghostbusters'

mimes.mft === 'application/rpki-manifest'

mimes.roa === 'application/rpki-roa'

mimes.rsd === 'application/rsd+xml'

mimes.rss === 'application/rss+xml'

mimes.rtf === 'text/rtf'

mimes.sbml === 'application/sbml+xml'

mimes.scq === 'application/scvp-cv-request'

mimes.scs === 'application/scvp-cv-response'

mimes.spq === 'application/scvp-vp-request'

mimes.spp === 'application/scvp-vp-response'

mimes.sdp === 'application/sdp'

mimes.senmlx === 'application/senml+xml'

mimes.sensmlx === 'application/sensml+xml'

mimes.setpay === 'application/set-payment-initiation'

mimes.setreg === 'application/set-registration-initiation'

mimes.shf === 'application/shf+xml'

mimes.siv === 'application/sieve'

mimes.sieve === 'application/sieve'

mimes.smi === 'application/smil+xml'

mimes.smil === 'application/smil+xml'

mimes.rq === 'application/sparql-query'

mimes.srx === 'application/sparql-results+xml'

mimes.gram === 'application/srgs'

mimes.grxml === 'application/srgs+xml'

mimes.sru === 'application/sru+xml'

mimes.ssdl === 'application/ssdl+xml'

mimes.ssml === 'application/ssml+xml'

mimes.swidtag === 'application/swid+xml'

mimes.tei === 'application/tei+xml'

mimes.teicorpus === 'application/tei+xml'

mimes.tfi === 'application/thraud+xml'

mimes.tsd === 'application/timestamped-data'

mimes.toml === 'application/toml'

mimes.ttml === 'application/ttml+xml'

mimes.ubj === 'application/ubjson'

mimes.rsheet === 'application/urc-ressheet+xml'

mimes.td === 'application/urc-targetdesc+xml'

mimes.1km === 'application/vnd.1000minds.decision-model+xml'

mimes.plb === 'application/vnd.3gpp.pic-bw-large'

mimes.psb === 'application/vnd.3gpp.pic-bw-small'

mimes.pvb === 'application/vnd.3gpp.pic-bw-var'

mimes.tcap === 'application/vnd.3gpp2.tcap'

mimes.pwn === 'application/vnd.3m.post-it-notes'

mimes.aso === 'application/vnd.accpac.simply.aso'

mimes.imp === 'application/vnd.accpac.simply.imp'

mimes.acu === 'application/vnd.acucobol'

mimes.atc === 'application/vnd.acucorp'

mimes.acutc === 'application/vnd.acucorp'

mimes.air === 'application/vnd.adobe.air-application-installer-package+zip'

mimes.fcdt === 'application/vnd.adobe.formscentral.fcdt'

mimes.fxp === 'application/vnd.adobe.fxp'

mimes.fxpl === 'application/vnd.adobe.fxp'

mimes.xdp === 'application/vnd.adobe.xdp+xml'

mimes.xfdf === 'application/vnd.adobe.xfdf'

mimes.ahead === 'application/vnd.ahead.space'

mimes.azf === 'application/vnd.airzip.filesecure.azf'

mimes.azs === 'application/vnd.airzip.filesecure.azs'

mimes.azw === 'application/vnd.amazon.ebook'

mimes.acc === 'application/vnd.americandynamics.acc'

mimes.ami === 'application/vnd.amiga.ami'

mimes.apk === 'application/vnd.android.package-archive'

mimes.cii === 'application/vnd.anser-web-certificate-issue-initiation'

mimes.fti === 'application/vnd.anser-web-funds-transfer-initiation'

mimes.atx === 'application/vnd.antix.game-component'

mimes.mpkg === 'application/vnd.apple.installer+xml'

mimes.key === 'application/vnd.apple.keynote'

mimes.m3u8 === 'application/vnd.apple.mpegurl'

mimes.numbers === 'application/vnd.apple.numbers'

mimes.pages === 'application/vnd.apple.pages'

mimes.pkpass === 'application/vnd.apple.pkpass'

mimes.swi === 'application/vnd.aristanetworks.swi'

mimes.iota === 'application/vnd.astraea-software.iota'

mimes.aep === 'application/vnd.audiograph'

mimes.bmml === 'application/vnd.balsamiq.bmml+xml'

mimes.mpm === 'application/vnd.blueice.multipass'

mimes.bmi === 'application/vnd.bmi'

mimes.rep === 'application/vnd.businessobjects'

mimes.cdxml === 'application/vnd.chemdraw+xml'

mimes.mmd === 'application/vnd.chipnuts.karaoke-mmd'

mimes.cdy === 'application/vnd.cinderella'

mimes.csl === 'application/vnd.citationstyles.style+xml'

mimes.cla === 'application/vnd.claymore'

mimes.rp9 === 'application/vnd.cloanto.rp9'

mimes.c4g === 'application/vnd.clonk.c4group'

mimes.c4d === 'application/vnd.clonk.c4group'

mimes.c4f === 'application/vnd.clonk.c4group'

mimes.c4p === 'application/vnd.clonk.c4group'

mimes.c4u === 'application/vnd.clonk.c4group'

mimes.c11amc === 'application/vnd.cluetrust.cartomobile-config'

mimes.c11amz === 'application/vnd.cluetrust.cartomobile-config-pkg'

mimes.csp === 'application/vnd.commonspace'

mimes.cdbcmsg === 'application/vnd.contact.cmsg'

mimes.cmc === 'application/vnd.cosmocaller'

mimes.clkx === 'application/vnd.crick.clicker'

mimes.clkk === 'application/vnd.crick.clicker.keyboard'

mimes.clkp === 'application/vnd.crick.clicker.palette'

mimes.clkt === 'application/vnd.crick.clicker.template'

mimes.clkw === 'application/vnd.crick.clicker.wordbank'

mimes.wbs === 'application/vnd.criticaltools.wbs+xml'

mimes.pml === 'application/vnd.ctc-posml'

mimes.ppd === 'application/vnd.cups-ppd'

mimes.car === 'application/vnd.curl.car'

mimes.pcurl === 'application/vnd.curl.pcurl'

mimes.dart === 'application/vnd.dart'

mimes.rdz === 'application/vnd.data-vision.rdz'

mimes.dbf === 'application/vnd.dbf'

mimes.uvf === 'application/vnd.dece.data'

mimes.uvvf === 'application/vnd.dece.data'

mimes.uvd === 'application/vnd.dece.data'

mimes.uvvd === 'application/vnd.dece.data'

mimes.uvt === 'application/vnd.dece.ttml+xml'

mimes.uvvt === 'application/vnd.dece.ttml+xml'

mimes.uvx === 'application/vnd.dece.unspecified'

mimes.uvvx === 'application/vnd.dece.unspecified'

mimes.uvz === 'application/vnd.dece.zip'

mimes.uvvz === 'application/vnd.dece.zip'

mimes.fe_launch === 'application/vnd.denovo.fcselayout-link'

mimes.dna === 'application/vnd.dna'

mimes.mlp === 'application/vnd.dolby.mlp'

mimes.dpg === 'application/vnd.dpgraph'

mimes.dfac === 'application/vnd.dreamfactory'

mimes.kpxx === 'application/vnd.ds-keypoint'

mimes.ait === 'application/vnd.dvb.ait'

mimes.svc === 'application/vnd.dvb.service'

mimes.geo === 'application/vnd.dynageo'

mimes.mag === 'application/vnd.ecowin.chart'

mimes.nml === 'application/vnd.enliven'

mimes.esf === 'application/vnd.epson.esf'

mimes.msf === 'application/vnd.epson.msf'

mimes.qam === 'application/vnd.epson.quickanime'

mimes.slt === 'application/vnd.epson.salt'

mimes.ssf === 'application/vnd.epson.ssf'

mimes.es3 === 'application/vnd.eszigno3+xml'

mimes.et3 === 'application/vnd.eszigno3+xml'

mimes.ez2 === 'application/vnd.ezpix-album'

mimes.ez3 === 'application/vnd.ezpix-package'

mimes.fdf === 'application/vnd.fdf'

mimes.mseed === 'application/vnd.fdsn.mseed'

mimes.seed === 'application/vnd.fdsn.seed'

mimes.dataless === 'application/vnd.fdsn.seed'

mimes.gph === 'application/vnd.flographit'

mimes.ftc === 'application/vnd.fluxtime.clip'

mimes.fm === 'application/vnd.framemaker'

mimes.frame === 'application/vnd.framemaker'

mimes.maker === 'application/vnd.framemaker'

mimes.book === 'application/vnd.framemaker'

mimes.fnc === 'application/vnd.frogans.fnc'

mimes.ltf === 'application/vnd.frogans.ltf'

mimes.fsc === 'application/vnd.fsc.weblaunch'

mimes.oas === 'application/vnd.fujitsu.oasys'

mimes.oa2 === 'application/vnd.fujitsu.oasys2'

mimes.oa3 === 'application/vnd.fujitsu.oasys3'

mimes.fg5 === 'application/vnd.fujitsu.oasysgp'

mimes.bh2 === 'application/vnd.fujitsu.oasysprs'

mimes.ddd === 'application/vnd.fujixerox.ddd'

mimes.xdw === 'application/vnd.fujixerox.docuworks'

mimes.xbd === 'application/vnd.fujixerox.docuworks.binder'

mimes.fzs === 'application/vnd.fuzzysheet'

mimes.txd === 'application/vnd.genomatix.tuxedo'

mimes.ggb === 'application/vnd.geogebra.file'

mimes.ggt === 'application/vnd.geogebra.tool'

mimes.gex === 'application/vnd.geometry-explorer'

mimes.gre === 'application/vnd.geometry-explorer'

mimes.gxt === 'application/vnd.geonext'

mimes.g2w === 'application/vnd.geoplan'

mimes.g3w === 'application/vnd.geospace'

mimes.gmx === 'application/vnd.gmx'

mimes.gdoc === 'application/vnd.google-apps.document'

mimes.gslides === 'application/vnd.google-apps.presentation'

mimes.gsheet === 'application/vnd.google-apps.spreadsheet'

mimes.kml === 'application/vnd.google-earth.kml+xml'

mimes.kmz === 'application/vnd.google-earth.kmz'

mimes.gqf === 'application/vnd.grafeq'

mimes.gqs === 'application/vnd.grafeq'

mimes.gac === 'application/vnd.groove-account'

mimes.ghf === 'application/vnd.groove-help'

mimes.gim === 'application/vnd.groove-identity-message'

mimes.grv === 'application/vnd.groove-injector'

mimes.gtm === 'application/vnd.groove-tool-message'

mimes.tpl === 'application/vnd.groove-tool-template'

mimes.vcg === 'application/vnd.groove-vcard'

mimes.hal === 'application/vnd.hal+xml'

mimes.zmm === 'application/vnd.handheld-entertainment+xml'

mimes.hbci === 'application/vnd.hbci'

mimes.les === 'application/vnd.hhe.lesson-player'

mimes.hpgl === 'application/vnd.hp-hpgl'

mimes.hpid === 'application/vnd.hp-hpid'

mimes.hps === 'application/vnd.hp-hps'

mimes.jlt === 'application/vnd.hp-jlyt'

mimes.pcl === 'application/vnd.hp-pcl'

mimes.pclxl === 'application/vnd.hp-pclxl'

mimes.sfd-hdstx === 'application/vnd.hydrostatix.sof-data'

mimes.mpy === 'application/vnd.ibm.minipay'

mimes.afp === 'application/vnd.ibm.modcap'

mimes.listafp === 'application/vnd.ibm.modcap'

mimes.list3820 === 'application/vnd.ibm.modcap'

mimes.irm === 'application/vnd.ibm.rights-management'

mimes.sc === 'application/vnd.ibm.secure-container'

mimes.icc === 'application/vnd.iccprofile'

mimes.icm === 'application/vnd.iccprofile'

mimes.igl === 'application/vnd.igloader'

mimes.ivp === 'application/vnd.immervision-ivp'

mimes.ivu === 'application/vnd.immervision-ivu'

mimes.igm === 'application/vnd.insors.igm'

mimes.xpw === 'application/vnd.intercon.formnet'

mimes.xpx === 'application/vnd.intercon.formnet'

mimes.i2g === 'application/vnd.intergeo'

mimes.qbo === 'application/vnd.intu.qbo'

mimes.qfx === 'application/vnd.intu.qfx'

mimes.rcprofile === 'application/vnd.ipunplugged.rcprofile'

mimes.irp === 'application/vnd.irepository.package+xml'

mimes.xpr === 'application/vnd.is-xpr'

mimes.fcs === 'application/vnd.isac.fcs'

mimes.jam === 'application/vnd.jam'

mimes.rms === 'application/vnd.jcp.javame.midlet-rms'

mimes.jisp === 'application/vnd.jisp'

mimes.joda === 'application/vnd.joost.joda-archive'

mimes.ktz === 'application/vnd.kahootz'

mimes.ktr === 'application/vnd.kahootz'

mimes.karbon === 'application/vnd.kde.karbon'

mimes.chrt === 'application/vnd.kde.kchart'

mimes.kfo === 'application/vnd.kde.kformula'

mimes.flw === 'application/vnd.kde.kivio'

mimes.kon === 'application/vnd.kde.kontour'

mimes.kpr === 'application/vnd.kde.kpresenter'

mimes.kpt === 'application/vnd.kde.kpresenter'

mimes.ksp === 'application/vnd.kde.kspread'

mimes.kwd === 'application/vnd.kde.kword'

mimes.kwt === 'application/vnd.kde.kword'

mimes.htke === 'application/vnd.kenameaapp'

mimes.kia === 'application/vnd.kidspiration'

mimes.kne === 'application/vnd.kinar'

mimes.knp === 'application/vnd.kinar'

mimes.skp === 'application/vnd.koan'

mimes.skd === 'application/vnd.koan'

mimes.skt === 'application/vnd.koan'

mimes.skm === 'application/vnd.koan'

mimes.sse === 'application/vnd.kodak-descriptor'

mimes.lasxml === 'application/vnd.las.las+xml'

mimes.lbd === 'application/vnd.llamagraphics.life-balance.desktop'

mimes.lbe === 'application/vnd.llamagraphics.life-balance.exchange+xml'

mimes.123 === 'application/vnd.lotus-1-2-3'

mimes.apr === 'application/vnd.lotus-approach'

mimes.pre === 'application/vnd.lotus-freelance'

mimes.nsf === 'application/vnd.lotus-notes'

mimes.org === 'text/x-org'

mimes.scm === 'application/vnd.lotus-screencam'

mimes.lwp === 'application/vnd.lotus-wordpro'

mimes.portpkg === 'application/vnd.macports.portpkg'

mimes.mcd === 'application/vnd.mcd'

mimes.mc1 === 'application/vnd.medcalcdata'

mimes.cdkey === 'application/vnd.mediastation.cdkey'

mimes.mwf === 'application/vnd.mfer'

mimes.mfm === 'application/vnd.mfmp'

mimes.flo === 'application/vnd.micrografx.flo'

mimes.igx === 'application/vnd.micrografx.igx'

mimes.mif === 'application/vnd.mif'

mimes.daf === 'application/vnd.mobius.daf'

mimes.dis === 'application/vnd.mobius.dis'

mimes.mbk === 'application/vnd.mobius.mbk'

mimes.mqy === 'application/vnd.mobius.mqy'

mimes.msl === 'application/vnd.mobius.msl'

mimes.plc === 'application/vnd.mobius.plc'

mimes.txf === 'application/vnd.mobius.txf'

mimes.mpn === 'application/vnd.mophun.application'

mimes.mpc === 'application/vnd.mophun.certificate'

mimes.xul === 'application/vnd.mozilla.xul+xml'

mimes.cil === 'application/vnd.ms-artgalry'

mimes.cab === 'application/vnd.ms-cab-compressed'

mimes.xls === 'application/vnd.ms-excel'

mimes.xlm === 'application/vnd.ms-excel'

mimes.xla === 'application/vnd.ms-excel'

mimes.xlc === 'application/vnd.ms-excel'

mimes.xlt === 'application/vnd.ms-excel'

mimes.xlw === 'application/vnd.ms-excel'

mimes.xlam === 'application/vnd.ms-excel.addin.macroenabled.12'

mimes.xlsb === 'application/vnd.ms-excel.sheet.binary.macroenabled.12'

mimes.xlsm === 'application/vnd.ms-excel.sheet.macroenabled.12'

mimes.xltm === 'application/vnd.ms-excel.template.macroenabled.12'

mimes.eot === 'application/vnd.ms-fontobject'

mimes.chm === 'application/vnd.ms-htmlhelp'

mimes.ims === 'application/vnd.ms-ims'

mimes.lrm === 'application/vnd.ms-lrm'

mimes.thmx === 'application/vnd.ms-officetheme'

mimes.msg === 'application/vnd.ms-outlook'

mimes.cat === 'application/vnd.ms-pki.seccat'

mimes.stl === 'model/stl'

mimes.ppt === 'application/vnd.ms-powerpoint'

mimes.pps === 'application/vnd.ms-powerpoint'

mimes.pot === 'application/vnd.ms-powerpoint'

mimes.ppam === 'application/vnd.ms-powerpoint.addin.macroenabled.12'

mimes.pptm === 'application/vnd.ms-powerpoint.presentation.macroenabled.12'

mimes.sldm === 'application/vnd.ms-powerpoint.slide.macroenabled.12'

mimes.ppsm === 'application/vnd.ms-powerpoint.slideshow.macroenabled.12'

mimes.potm === 'application/vnd.ms-powerpoint.template.macroenabled.12'

mimes.mpp === 'application/vnd.ms-project'

mimes.mpt === 'application/vnd.ms-project'

mimes.docm === 'application/vnd.ms-word.document.macroenabled.12'

mimes.dotm === 'application/vnd.ms-word.template.macroenabled.12'

mimes.wps === 'application/vnd.ms-works'

mimes.wks === 'application/vnd.ms-works'

mimes.wcm === 'application/vnd.ms-works'

mimes.wdb === 'application/vnd.ms-works'

mimes.wpl === 'application/vnd.ms-wpl'

mimes.xps === 'application/vnd.ms-xpsdocument'

mimes.mseq === 'application/vnd.mseq'

mimes.mus === 'application/vnd.musician'

mimes.msty === 'application/vnd.muvee.style'

mimes.taglet === 'application/vnd.mynfc'

mimes.nlu === 'application/vnd.neurolanguage.nlu'

mimes.ntf === 'application/vnd.nitf'

mimes.nitf === 'application/vnd.nitf'

mimes.nnd === 'application/vnd.noblenet-directory'

mimes.nns === 'application/vnd.noblenet-sealer'

mimes.nnw === 'application/vnd.noblenet-web'

mimes.ac === 'application/vnd.nokia.n-gage.ac+xml'

mimes.ngdat === 'application/vnd.nokia.n-gage.data'

mimes.n-gage === 'application/vnd.nokia.n-gage.symbian.install'

mimes.rpst === 'application/vnd.nokia.radio-preset'

mimes.rpss === 'application/vnd.nokia.radio-presets'

mimes.edm === 'application/vnd.novadigm.edm'

mimes.edx === 'application/vnd.novadigm.edx'

mimes.ext === 'application/vnd.novadigm.ext'

mimes.odc === 'application/vnd.oasis.opendocument.chart'

mimes.otc === 'application/vnd.oasis.opendocument.chart-template'

mimes.odb === 'application/vnd.oasis.opendocument.database'

mimes.odf === 'application/vnd.oasis.opendocument.formula'

mimes.odft === 'application/vnd.oasis.opendocument.formula-template'

mimes.odg === 'application/vnd.oasis.opendocument.graphics'

mimes.otg === 'application/vnd.oasis.opendocument.graphics-template'

mimes.odi === 'application/vnd.oasis.opendocument.image'

mimes.oti === 'application/vnd.oasis.opendocument.image-template'

mimes.odp === 'application/vnd.oasis.opendocument.presentation'

mimes.otp === 'application/vnd.oasis.opendocument.presentation-template'

mimes.ods === 'application/vnd.oasis.opendocument.spreadsheet'

mimes.ots === 'application/vnd.oasis.opendocument.spreadsheet-template'

mimes.odt === 'application/vnd.oasis.opendocument.text'

mimes.odm === 'application/vnd.oasis.opendocument.text-master'

mimes.ott === 'application/vnd.oasis.opendocument.text-template'

mimes.oth === 'application/vnd.oasis.opendocument.text-web'

mimes.xo === 'application/vnd.olpc-sugar'

mimes.dd2 === 'application/vnd.oma.dd2+xml'

mimes.obgx === 'application/vnd.openblox.game+xml'

mimes.oxt === 'application/vnd.openofficeorg.extension'

mimes.osm === 'application/vnd.openstreetmap.data+xml'

mimes.pptx === 'application/vnd.openxmlformats-officedocument.presentationml.presentation'

mimes.sldx === 'application/vnd.openxmlformats-officedocument.presentationml.slide'

mimes.ppsx === 'application/vnd.openxmlformats-officedocument.presentationml.slideshow'

mimes.potx === 'application/vnd.openxmlformats-officedocument.presentationml.template'

mimes.xlsx === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'

mimes.xltx === 'application/vnd.openxmlformats-officedocument.spreadsheetml.template'

mimes.docx === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

mimes.dotx === 'application/vnd.openxmlformats-officedocument.wordprocessingml.template'

mimes.mgp === 'application/vnd.osgeo.mapguide.package'

mimes.dp === 'application/vnd.osgi.dp'

mimes.esa === 'application/vnd.osgi.subsystem'

mimes.pdb === 'application/x-pilot'

mimes.pqa === 'application/vnd.palm'

mimes.oprc === 'application/vnd.palm'

mimes.paw === 'application/vnd.pawaafile'

mimes.str === 'application/vnd.pg.format'

mimes.ei6 === 'application/vnd.pg.osasli'

mimes.efif === 'application/vnd.picsel'

mimes.wg === 'application/vnd.pmi.widget'

mimes.plf === 'application/vnd.pocketlearn'

mimes.pbd === 'application/vnd.powerbuilder6'

mimes.box === 'application/vnd.previewsystems.box'

mimes.mgz === 'application/vnd.proteus.magazine'

mimes.qps === 'application/vnd.publishare-delta-tree'

mimes.ptid === 'application/vnd.pvi.ptid1'

mimes.qxd === 'application/vnd.quark.quarkxpress'

mimes.qxt === 'application/vnd.quark.quarkxpress'

mimes.qwd === 'application/vnd.quark.quarkxpress'

mimes.qwt === 'application/vnd.quark.quarkxpress'

mimes.qxl === 'application/vnd.quark.quarkxpress'

mimes.qxb === 'application/vnd.quark.quarkxpress'

mimes.rar === 'application/vnd.rar'

mimes.bed === 'application/vnd.realvnc.bed'

mimes.mxl === 'application/vnd.recordare.musicxml'

mimes.musicxml === 'application/vnd.recordare.musicxml+xml'

mimes.cryptonote === 'application/vnd.rig.cryptonote'

mimes.cod === 'application/vnd.rim.cod'

mimes.rm === 'application/vnd.rn-realmedia'

mimes.rmvb === 'application/vnd.rn-realmedia-vbr'

mimes.link66 === 'application/vnd.route66.link66+xml'

mimes.st === 'application/vnd.sailingtracker.track'

mimes.see === 'application/vnd.seemail'

mimes.sema === 'application/vnd.sema'

mimes.semd === 'application/vnd.semd'

mimes.semf === 'application/vnd.semf'

mimes.ifm === 'application/vnd.shana.informed.formdata'

mimes.itp === 'application/vnd.shana.informed.formtemplate'

mimes.iif === 'application/vnd.shana.informed.interchange'

mimes.ipk === 'application/vnd.shana.informed.package'

mimes.twd === 'application/vnd.simtech-mindmapper'

mimes.twds === 'application/vnd.simtech-mindmapper'

mimes.mmf === 'application/vnd.smaf'

mimes.teacher === 'application/vnd.smart.teacher'

mimes.fo === 'application/vnd.software602.filler.form+xml'

mimes.sdkm === 'application/vnd.solent.sdkm+xml'

mimes.sdkd === 'application/vnd.solent.sdkm+xml'

mimes.dxp === 'application/vnd.spotfire.dxp'

mimes.sfs === 'application/vnd.spotfire.sfs'

mimes.sdc === 'application/vnd.stardivision.calc'

mimes.sda === 'application/vnd.stardivision.draw'

mimes.sdd === 'application/vnd.stardivision.impress'

mimes.smf === 'application/vnd.stardivision.math'

mimes.sdw === 'application/vnd.stardivision.writer'

mimes.vor === 'application/vnd.stardivision.writer'

mimes.sgl === 'application/vnd.stardivision.writer-global'

mimes.smzip === 'application/vnd.stepmania.package'

mimes.sm === 'application/vnd.stepmania.stepchart'

mimes.wadl === 'application/vnd.sun.wadl+xml'

mimes.sxc === 'application/vnd.sun.xml.calc'

mimes.stc === 'application/vnd.sun.xml.calc.template'

mimes.sxd === 'application/vnd.sun.xml.draw'

mimes.std === 'application/vnd.sun.xml.draw.template'

mimes.sxi === 'application/vnd.sun.xml.impress'

mimes.sti === 'application/vnd.sun.xml.impress.template'

mimes.sxm === 'application/vnd.sun.xml.math'

mimes.sxw === 'application/vnd.sun.xml.writer'

mimes.sxg === 'application/vnd.sun.xml.writer.global'

mimes.stw === 'application/vnd.sun.xml.writer.template'

mimes.sus === 'application/vnd.sus-calendar'

mimes.susp === 'application/vnd.sus-calendar'

mimes.svd === 'application/vnd.svd'

mimes.sis === 'application/vnd.symbian.install'

mimes.sisx === 'application/vnd.symbian.install'

mimes.xsm === 'application/vnd.syncml+xml'

mimes.bdm === 'application/vnd.syncml.dm+wbxml'

mimes.xdm === 'application/vnd.syncml.dm+xml'

mimes.ddf === 'application/vnd.syncml.dmddf+xml'

mimes.tao === 'application/vnd.tao.intent-module-archive'

mimes.pcap === 'application/vnd.tcpdump.pcap'

mimes.cap === 'application/vnd.tcpdump.pcap'

mimes.dmp === 'application/vnd.tcpdump.pcap'

mimes.tmo === 'application/vnd.tmobile-livetv'

mimes.tpt === 'application/vnd.trid.tpt'

mimes.mxs === 'application/vnd.triscape.mxs'

mimes.tra === 'application/vnd.trueapp'

mimes.ufd === 'application/vnd.ufdl'

mimes.ufdl === 'application/vnd.ufdl'

mimes.utz === 'application/vnd.uiq.theme'

mimes.umj === 'application/vnd.umajin'

mimes.unityweb === 'application/vnd.unity'

mimes.uoml === 'application/vnd.uoml+xml'

mimes.vcx === 'application/vnd.vcx'

mimes.vsd === 'application/vnd.visio'

mimes.vst === 'application/vnd.visio'

mimes.vss === 'application/vnd.visio'

mimes.vsw === 'application/vnd.visio'

mimes.vis === 'application/vnd.visionary'

mimes.vsf === 'application/vnd.vsf'

mimes.wbxml === 'application/vnd.wap.wbxml'

mimes.wmlc === 'application/vnd.wap.wmlc'

mimes.wmlsc === 'application/vnd.wap.wmlscriptc'

mimes.wtb === 'application/vnd.webturbo'

mimes.nbp === 'application/vnd.wolfram.player'

mimes.wpd === 'application/vnd.wordperfect'

mimes.wqd === 'application/vnd.wqd'

mimes.stf === 'application/vnd.wt.stf'

mimes.xar === 'application/vnd.xara'

mimes.xfdl === 'application/vnd.xfdl'

mimes.hvd === 'application/vnd.yamaha.hv-dic'

mimes.hvs === 'application/vnd.yamaha.hv-script'

mimes.hvp === 'application/vnd.yamaha.hv-voice'

mimes.osf === 'application/vnd.yamaha.openscoreformat'

mimes.osfpvg === 'application/vnd.yamaha.openscoreformat.osfpvg+xml'

mimes.saf === 'application/vnd.yamaha.smaf-audio'

mimes.spf === 'application/vnd.yamaha.smaf-phrase'

mimes.cmp === 'application/vnd.yellowriver-custom-menu'

mimes.zir === 'application/vnd.zul'

mimes.zirz === 'application/vnd.zul'

mimes.zaz === 'application/vnd.zzazz.deck+xml'

mimes.vxml === 'application/voicexml+xml'

mimes.wasm === 'application/wasm'

mimes.wgt === 'application/widget'

mimes.hlp === 'application/winhlp'

mimes.wsdl === 'application/wsdl+xml'

mimes.wspolicy === 'application/wspolicy+xml'

mimes.7z === 'application/x-7z-compressed'

mimes.abw === 'application/x-abiword'

mimes.ace === 'application/x-ace-compressed'

mimes.dmg === 'application/octet-stream'

mimes.arj === 'application/x-arj'

mimes.aab === 'application/x-authorware-bin'

mimes.x32 === 'application/x-authorware-bin'

mimes.u32 === 'application/x-authorware-bin'

mimes.vox === 'application/x-authorware-bin'

mimes.aam === 'application/x-authorware-map'

mimes.aas === 'application/x-authorware-seg'

mimes.bcpio === 'application/x-bcpio'

mimes.bdoc === 'application/bdoc'

mimes.torrent === 'application/x-bittorrent'

mimes.blb === 'application/x-blorb'

mimes.blorb === 'application/x-blorb'

mimes.bz === 'application/x-bzip'

mimes.bz2 === 'application/x-bzip2'

mimes.boz === 'application/x-bzip2'

mimes.cbr === 'application/x-cbr'

mimes.cba === 'application/x-cbr'

mimes.cbt === 'application/x-cbr'

mimes.cbz === 'application/x-cbr'

mimes.cb7 === 'application/x-cbr'

mimes.vcd === 'application/x-cdlink'

mimes.cfs === 'application/x-cfs-compressed'

mimes.chat === 'application/x-chat'

mimes.pgn === 'application/x-chess-pgn'

mimes.crx === 'application/x-chrome-extension'

mimes.cco === 'application/x-cocoa'

mimes.nsc === 'application/x-conference'

mimes.cpio === 'application/x-cpio'

mimes.csh === 'application/x-csh'

mimes.deb === 'application/x-debian-package'

mimes.udeb === 'application/x-debian-package'

mimes.dgc === 'application/x-dgc-compressed'

mimes.dir === 'application/x-director'

mimes.dcr === 'application/x-director'

mimes.dxr === 'application/x-director'

mimes.cst === 'application/x-director'

mimes.cct === 'application/x-director'

mimes.cxt === 'application/x-director'

mimes.w3d === 'application/x-director'

mimes.fgd === 'application/x-director'

mimes.swa === 'application/x-director'

mimes.wad === 'application/x-doom'

mimes.ncx === 'application/x-dtbncx+xml'

mimes.dtb === 'application/x-dtbook+xml'

mimes.res === 'application/x-dtbresource+xml'

mimes.dvi === 'application/x-dvi'

mimes.evy === 'application/x-envoy'

mimes.eva === 'application/x-eva'

mimes.bdf === 'application/x-font-bdf'

mimes.gsf === 'application/x-font-ghostscript'

mimes.psf === 'application/x-font-linux-psf'

mimes.pcf === 'application/x-font-pcf'

mimes.snf === 'application/x-font-snf'

mimes.pfa === 'application/x-font-type1'

mimes.pfb === 'application/x-font-type1'

mimes.pfm === 'application/x-font-type1'

mimes.afm === 'application/x-font-type1'

mimes.arc === 'application/x-freearc'

mimes.spl === 'application/x-futuresplash'

mimes.gca === 'application/x-gca-compressed'

mimes.ulx === 'application/x-glulx'

mimes.gnumeric === 'application/x-gnumeric'

mimes.gramps === 'application/x-gramps-xml'

mimes.gtar === 'application/x-gtar'

mimes.hdf === 'application/x-hdf'

mimes.php === 'application/x-httpd-php'

mimes.install === 'application/x-install-instructions'

mimes.iso === 'application/octet-stream'

mimes.jardiff === 'application/x-java-archive-diff'

mimes.jnlp === 'application/x-java-jnlp-file'

mimes.kdbx === 'application/x-keepass2'

mimes.latex === 'application/x-latex'

mimes.luac === 'application/x-lua-bytecode'

mimes.lzh === 'application/x-lzh-compressed'

mimes.lha === 'application/x-lzh-compressed'

mimes.run === 'application/x-makeself'

mimes.mie === 'application/x-mie'

mimes.prc === 'application/x-pilot'

mimes.mobi === 'application/x-mobipocket-ebook'

mimes.application === 'application/x-ms-application'

mimes.lnk === 'application/x-ms-shortcut'

mimes.wmd === 'application/x-ms-wmd'

mimes.wmz === 'application/x-ms-wmz'

mimes.xbap === 'application/x-ms-xbap'

mimes.mdb === 'application/x-msaccess'

mimes.obd === 'application/x-msbinder'

mimes.crd === 'application/x-mscardfile'

mimes.clp === 'application/x-msclip'

mimes.exe === 'application/x-msdos-program'

mimes.exe === 'application/x-msdos-program'

mimes.dll === 'application/octet-stream'

mimes.com === 'application/x-msdownload'

mimes.bat === 'application/x-msdownload'

mimes.msi === 'application/octet-stream'

mimes.mvb === 'application/x-msmediaview'

mimes.m13 === 'application/x-msmediaview'

mimes.m14 === 'application/x-msmediaview'

mimes.wmf === 'image/wmf'

mimes.wmz === 'application/x-ms-wmz'

mimes.emf === 'image/emf'

mimes.emz === 'application/x-msmetafile'

mimes.mny === 'application/x-msmoney'

mimes.pub === 'application/x-mspublisher'

mimes.scd === 'application/x-msschedule'

mimes.trm === 'application/x-msterminal'

mimes.wri === 'application/x-mswrite'

mimes.nc === 'application/x-netcdf'

mimes.cdf === 'application/x-netcdf'

mimes.pac === 'application/x-ns-proxy-autoconfig'

mimes.nzb === 'application/x-nzb'

mimes.pl === 'application/x-perl'

mimes.pm === 'application/x-perl'

mimes.prc === 'application/x-pilot'

mimes.pdb === 'application/x-pilot'

mimes.p12 === 'application/x-pkcs12'

mimes.pfx === 'application/x-pkcs12'

mimes.p7b === 'application/x-pkcs7-certificates'

mimes.spc === 'application/x-pkcs7-certificates'

mimes.p7r === 'application/x-pkcs7-certreqresp'

mimes.rar === 'application/x-rar-compressed'

mimes.rpm === 'application/x-redhat-package-manager'

mimes.ris === 'application/x-research-info-systems'

mimes.sea === 'application/x-sea'

mimes.sh === 'application/x-sh'

mimes.shar === 'application/x-shar'

mimes.swf === 'application/x-shockwave-flash'

mimes.xap === 'application/x-silverlight-app'

mimes.sql === 'application/x-sql'

mimes.sit === 'application/x-stuffit'

mimes.sitx === 'application/x-stuffitx'

mimes.srt === 'application/x-subrip'

mimes.sv4cpio === 'application/x-sv4cpio'

mimes.sv4crc === 'application/x-sv4crc'

mimes.t3 === 'application/x-t3vm-image'

mimes.gam === 'application/x-tads'

mimes.tar === 'application/x-tar'

mimes.tcl === 'application/x-tcl'

mimes.tk === 'application/x-tcl'

mimes.tex === 'application/x-tex'

mimes.tfm === 'application/x-tex-tfm'

mimes.texinfo === 'application/x-texinfo'

mimes.texi === 'application/x-texinfo'

mimes.obj === 'application/x-tgif'

mimes.ustar === 'application/x-ustar'

mimes.hdd === 'application/x-virtualbox-hdd'

mimes.ova === 'application/x-virtualbox-ova'

mimes.ovf === 'application/x-virtualbox-ovf'

mimes.vbox === 'application/x-virtualbox-vbox'

mimes.vbox-extpack === 'application/x-virtualbox-vbox-extpack'

mimes.vdi === 'application/x-virtualbox-vdi'

mimes.vhd === 'application/x-virtualbox-vhd'

mimes.vmdk === 'application/x-virtualbox-vmdk'

mimes.src === 'application/x-wais-source'

mimes.webapp === 'application/x-web-app-manifest+json'

mimes.der === 'application/x-x509-ca-cert'

mimes.crt === 'application/x-x509-ca-cert'

mimes.pem === 'application/x-x509-ca-cert'

mimes.fig === 'application/x-xfig'

mimes.xlf === 'application/x-xliff+xml'

mimes.xpi === 'application/x-xpinstall'

mimes.xz === 'application/x-xz'

mimes.z1 === 'application/x-zmachine'

mimes.z2 === 'application/x-zmachine'

mimes.z3 === 'application/x-zmachine'

mimes.z4 === 'application/x-zmachine'

mimes.z5 === 'application/x-zmachine'

mimes.z6 === 'application/x-zmachine'

mimes.z7 === 'application/x-zmachine'

mimes.z8 === 'application/x-zmachine'

mimes.xaml === 'application/xaml+xml'

mimes.xav === 'application/xcap-att+xml'

mimes.xca === 'application/xcap-caps+xml'

mimes.xdf === 'application/xcap-diff+xml'

mimes.xel === 'application/xcap-el+xml'

mimes.xer === 'application/xcap-error+xml'

mimes.xns === 'application/xcap-ns+xml'

mimes.xenc === 'application/xenc+xml'

mimes.xhtml === 'application/xhtml+xml'

mimes.xht === 'application/xhtml+xml'

mimes.xlf === 'application/xliff+xml'

mimes.xml === 'text/xml'

mimes.xsl === 'application/xml'

mimes.xsd === 'application/xml'

mimes.rng === 'application/xml'

mimes.dtd === 'application/xml-dtd'

mimes.xop === 'application/xop+xml'

mimes.xpl === 'application/xproc+xml'

mimes.xsl === 'application/xslt+xml'

mimes.xslt === 'application/xslt+xml'

mimes.xspf === 'application/xspf+xml'

mimes.mxml === 'application/xv+xml'

mimes.xhvml === 'application/xv+xml'

mimes.xvml === 'application/xv+xml'

mimes.xvm === 'application/xv+xml'

mimes.yang === 'application/yang'

mimes.yin === 'application/yin+xml'

mimes.zip === 'application/zip'

mimes.3gpp === 'video/3gpp'

mimes.adp === 'audio/adpcm'

mimes.au === 'audio/basic'

mimes.snd === 'audio/basic'

mimes.mid === 'audio/midi'

mimes.midi === 'audio/midi'

mimes.kar === 'audio/midi'

mimes.rmi === 'audio/midi'

mimes.mxmf === 'audio/mobile-xmf'

mimes.mp3 === 'audio/mp3'

mimes.m4a === 'audio/mp4'

mimes.mp4a === 'audio/mp4'

mimes.mpga === 'audio/mpeg'

mimes.mp2 === 'audio/mpeg'

mimes.mp2a === 'audio/mpeg'

mimes.mp3 === 'audio/mp3'

mimes.m2a === 'audio/mpeg'

mimes.m3a === 'audio/mpeg'

mimes.oga === 'audio/ogg'

mimes.ogg === 'audio/ogg'

mimes.spx === 'audio/ogg'

mimes.s3m === 'audio/s3m'

mimes.sil === 'audio/silk'

mimes.uva === 'audio/vnd.dece.audio'

mimes.uvva === 'audio/vnd.dece.audio'

mimes.eol === 'audio/vnd.digital-winds'

mimes.dra === 'audio/vnd.dra'

mimes.dts === 'audio/vnd.dts'

mimes.dtshd === 'audio/vnd.dts.hd'

mimes.lvp === 'audio/vnd.lucent.voice'

mimes.pya === 'audio/vnd.ms-playready.media.pya'

mimes.ecelp4800 === 'audio/vnd.nuera.ecelp4800'

mimes.ecelp7470 === 'audio/vnd.nuera.ecelp7470'

mimes.ecelp9600 === 'audio/vnd.nuera.ecelp9600'

mimes.rip === 'audio/vnd.rip'

mimes.wav === 'audio/wave'

mimes.wav === 'audio/wave'

mimes.weba === 'audio/webm'

mimes.aac === 'audio/x-aac'

mimes.aif === 'audio/x-aiff'

mimes.aiff === 'audio/x-aiff'

mimes.aifc === 'audio/x-aiff'

mimes.caf === 'audio/x-caf'

mimes.flac === 'audio/x-flac'

mimes.m4a === 'audio/mp4'

mimes.mka === 'audio/x-matroska'

mimes.m3u === 'audio/x-mpegurl'

mimes.wax === 'audio/x-ms-wax'

mimes.wma === 'audio/x-ms-wma'

mimes.ram === 'audio/x-pn-realaudio'

mimes.ra === 'audio/x-realaudio'

mimes.rmp === 'audio/x-pn-realaudio-plugin'

mimes.ra === 'audio/x-realaudio'

mimes.wav === 'audio/wave'

mimes.xm === 'audio/xm'

mimes.cdx === 'chemical/x-cdx'

mimes.cif === 'chemical/x-cif'

mimes.cmdf === 'chemical/x-cmdf'

mimes.cml === 'chemical/x-cml'

mimes.csml === 'chemical/x-csml'

mimes.xyz === 'chemical/x-xyz'

mimes.ttc === 'font/collection'

mimes.otf === 'font/otf'

mimes.ttf === 'font/ttf'

mimes.woff === 'font/woff'

mimes.woff2 === 'font/woff2'

mimes.exr === 'image/aces'

mimes.apng === 'image/apng'

mimes.avif === 'image/avif'

mimes.bmp === 'image/bmp'

mimes.cgm === 'image/cgm'

mimes.drle === 'image/dicom-rle'

mimes.emf === 'image/emf'

mimes.fits === 'image/fits'

mimes.g3 === 'image/g3fax'

mimes.gif === 'image/gif'

mimes.heic === 'image/heic'

mimes.heics === 'image/heic-sequence'

mimes.heif === 'image/heif'

mimes.heifs === 'image/heif-sequence'

mimes.hej2 === 'image/hej2k'

mimes.hsj2 === 'image/hsj2'

mimes.ief === 'image/ief'

mimes.jls === 'image/jls'

mimes.jp2 === 'image/jp2'

mimes.jpg2 === 'image/jp2'

mimes.jpeg === 'image/jpeg'

mimes.jpg === 'image/jpeg'

mimes.jpe === 'image/jpeg'

mimes.jph === 'image/jph'

mimes.jhc === 'image/jphc'

mimes.jpm === 'image/jpm'

mimes.jpx === 'image/jpx'

mimes.jpf === 'image/jpx'

mimes.jxr === 'image/jxr'

mimes.jxra === 'image/jxra'

mimes.jxrs === 'image/jxrs'

mimes.jxs === 'image/jxs'

mimes.jxsc === 'image/jxsc'

mimes.jxsi === 'image/jxsi'

mimes.jxss === 'image/jxss'

mimes.ktx === 'image/ktx'

mimes.ktx2 === 'image/ktx2'

mimes.png === 'image/png'

mimes.btif === 'image/prs.btif'

mimes.pti === 'image/prs.pti'

mimes.sgi === 'image/sgi'

mimes.svg === 'image/svg+xml'

mimes.svgz === 'image/svg+xml'

mimes.t38 === 'image/t38'

mimes.tif === 'image/tiff'

mimes.tiff === 'image/tiff'

mimes.tfx === 'image/tiff-fx'

mimes.psd === 'image/vnd.adobe.photoshop'

mimes.azv === 'image/vnd.airzip.accelerator.azv'

mimes.uvi === 'image/vnd.dece.graphic'

mimes.uvvi === 'image/vnd.dece.graphic'

mimes.uvg === 'image/vnd.dece.graphic'

mimes.uvvg === 'image/vnd.dece.graphic'

mimes.djvu === 'image/vnd.djvu'

mimes.djv === 'image/vnd.djvu'

mimes.sub === 'text/vnd.dvb.subtitle'

mimes.dwg === 'image/vnd.dwg'

mimes.dxf === 'image/vnd.dxf'

mimes.fbs === 'image/vnd.fastbidsheet'

mimes.fpx === 'image/vnd.fpx'

mimes.fst === 'image/vnd.fst'

mimes.mmr === 'image/vnd.fujixerox.edmics-mmr'

mimes.rlc === 'image/vnd.fujixerox.edmics-rlc'

mimes.ico === 'image/x-icon'

mimes.dds === 'image/vnd.ms-dds'

mimes.mdi === 'image/vnd.ms-modi'

mimes.wdp === 'image/vnd.ms-photo'

mimes.npx === 'image/vnd.net-fpx'

mimes.b16 === 'image/vnd.pco.b16'

mimes.tap === 'image/vnd.tencent.tap'

mimes.vtf === 'image/vnd.valve.source.texture'

mimes.wbmp === 'image/vnd.wap.wbmp'

mimes.xif === 'image/vnd.xiff'

mimes.pcx === 'image/x-pcx'

mimes.webp === 'image/webp'

mimes.wmf === 'image/wmf'

mimes.3ds === 'image/x-3ds'

mimes.ras === 'image/x-cmu-raster'

mimes.cmx === 'image/x-cmx'

mimes.fh === 'image/x-freehand'

mimes.fhc === 'image/x-freehand'

mimes.fh4 === 'image/x-freehand'

mimes.fh5 === 'image/x-freehand'

mimes.fh7 === 'image/x-freehand'

mimes.ico === 'image/x-icon'

mimes.jng === 'image/x-jng'

mimes.sid === 'image/x-mrsid-image'

mimes.bmp === 'image/bmp'

mimes.pcx === 'image/x-pcx'

mimes.pic === 'image/x-pict'

mimes.pct === 'image/x-pict'

mimes.pnm === 'image/x-portable-anymap'

mimes.pbm === 'image/x-portable-bitmap'

mimes.pgm === 'image/x-portable-graymap'

mimes.ppm === 'image/x-portable-pixmap'

mimes.rgb === 'image/x-rgb'

mimes.tga === 'image/x-tga'

mimes.xbm === 'image/x-xbitmap'

mimes.xpm === 'image/x-xpixmap'

mimes.xwd === 'image/x-xwindowdump'

mimes.disposition-notification === 'message/disposition-notification'

mimes.u8msg === 'message/global'

mimes.u8dsn === 'message/global-delivery-status'

mimes.u8mdn === 'message/global-disposition-notification'

mimes.u8hdr === 'message/global-headers'

mimes.eml === 'message/rfc822'

mimes.mime === 'message/rfc822'

mimes.wsc === 'message/vnd.wfa.wsc'

mimes.3mf === 'model/3mf'

mimes.gltf === 'model/gltf+json'

mimes.glb === 'model/gltf-binary'

mimes.igs === 'model/iges'

mimes.iges === 'model/iges'

mimes.msh === 'model/mesh'

mimes.mesh === 'model/mesh'

mimes.silo === 'model/mesh'

mimes.mtl === 'model/mtl'

mimes.obj === 'model/obj'

mimes.stl === 'model/stl'

mimes.dae === 'model/vnd.collada+xml'

mimes.dwf === 'model/vnd.dwf'

mimes.gdl === 'model/vnd.gdl'

mimes.gtw === 'model/vnd.gtw'

mimes.mts === 'model/vnd.mts'

mimes.ogex === 'model/vnd.opengex'

mimes.x_b === 'model/vnd.parasolid.transmit.binary'

mimes.x_t === 'model/vnd.parasolid.transmit.text'

mimes.usdz === 'model/vnd.usdz+zip'

mimes.bsp === 'model/vnd.valve.source.compiled-map'

mimes.vtu === 'model/vnd.vtu'

mimes.wrl === 'model/vrml'

mimes.vrml === 'model/vrml'

mimes.x3db === 'model/x3d+binary'

mimes.x3dbz === 'model/x3d+binary'

mimes.x3db === 'model/x3d+binary'

mimes.x3dv === 'model/x3d-vrml'

mimes.x3dvz === 'model/x3d+vrml'

mimes.x3d === 'model/x3d+xml'

mimes.x3dz === 'model/x3d+xml'

mimes.x3dv === 'model/x3d-vrml'

mimes.appcache === 'text/cache-manifest'

mimes.manifest === 'text/cache-manifest'

mimes.ics === 'text/calendar'

mimes.ifb === 'text/calendar'

mimes.coffee === 'text/coffeescript'

mimes.litcoffee === 'text/coffeescript'

mimes.css === 'text/css'

mimes.csv === 'text/csv'

mimes.html === 'text/html'

mimes.htm === 'text/html'

mimes.shtml === 'text/html'

mimes.jade === 'text/jade'

mimes.jsx === 'text/jsx'

mimes.less === 'text/less'

mimes.markdown === 'text/markdown'

mimes.md === 'text/markdown'

mimes.mml === 'text/mathml'

mimes.mdx === 'text/mdx'

mimes.n3 === 'text/n3'

mimes.txt === 'text/plain'

mimes.text === 'text/plain'

mimes.conf === 'text/plain'

mimes.def === 'text/plain'

mimes.list === 'text/plain'

mimes.log === 'text/plain'

mimes.in === 'text/plain'

mimes.ini === 'text/plain'

mimes.dsc === 'text/prs.lines.tag'

mimes.rtx === 'text/richtext'

mimes.rtf === 'text/rtf'

mimes.sgml === 'text/sgml'

mimes.sgm === 'text/sgml'

mimes.shex === 'text/shex'

mimes.slim === 'text/slim'

mimes.slm === 'text/slim'

mimes.spdx === 'text/spdx'

mimes.stylus === 'text/stylus'

mimes.styl === 'text/stylus'

mimes.tsv === 'text/tab-separated-values'

mimes.t === 'text/troff'

mimes.tr === 'text/troff'

mimes.roff === 'text/troff'

mimes.man === 'text/troff'

mimes.me === 'text/troff'

mimes.ms === 'text/troff'

mimes.ttl === 'text/turtle'

mimes.uri === 'text/uri-list'

mimes.uris === 'text/uri-list'

mimes.urls === 'text/uri-list'

mimes.vcard === 'text/vcard'

mimes.curl === 'text/vnd.curl'

mimes.dcurl === 'text/vnd.curl.dcurl'

mimes.mcurl === 'text/vnd.curl.mcurl'

mimes.scurl === 'text/vnd.curl.scurl'

mimes.sub === 'text/vnd.dvb.subtitle'

mimes.fly === 'text/vnd.fly'

mimes.flx === 'text/vnd.fmi.flexstor'

mimes.gv === 'text/vnd.graphviz'

mimes.3dml === 'text/vnd.in3d.3dml'

mimes.spot === 'text/vnd.in3d.spot'

mimes.jad === 'text/vnd.sun.j2me.app-descriptor'

mimes.wml === 'text/vnd.wap.wml'

mimes.wmls === 'text/vnd.wap.wmlscript'

mimes.vtt === 'text/vtt'

mimes.s === 'text/x-asm'

mimes.asm === 'text/x-asm'

mimes.c === 'text/x-c'

mimes.cc === 'text/x-c'

mimes.cxx === 'text/x-c'

mimes.cpp === 'text/x-c'

mimes.h === 'text/x-c'

mimes.hh === 'text/x-c'

mimes.dic === 'text/x-c'

mimes.htc === 'text/x-component'

mimes.f === 'text/x-fortran'

mimes.for === 'text/x-fortran'

mimes.f77 === 'text/x-fortran'

mimes.f90 === 'text/x-fortran'

mimes.hbs === 'text/x-handlebars-template'

mimes.java === 'text/x-java-source'

mimes.lua === 'text/x-lua'

mimes.mkd === 'text/x-markdown'

mimes.nfo === 'text/x-nfo'

mimes.opml === 'text/x-opml'

mimes.org === 'text/x-org'

mimes.p === 'text/x-pascal'

mimes.pas === 'text/x-pascal'

mimes.pde === 'text/x-processing'

mimes.sass === 'text/x-sass'

mimes.scss === 'text/x-scss'

mimes.etx === 'text/x-setext'

mimes.sfv === 'text/x-sfv'

mimes.ymp === 'text/x-suse-ymp'

mimes.uu === 'text/x-uuencode'

mimes.vcs === 'text/x-vcalendar'

mimes.vcf === 'text/x-vcard'

mimes.xml === 'text/xml'

mimes.yaml === 'text/yaml'

mimes.yml === 'text/yaml'

mimes.3gp === 'video/3gpp'

mimes.3gpp === 'video/3gpp'

mimes.3g2 === 'video/3gpp2'

mimes.h261 === 'video/h261'

mimes.h263 === 'video/h263'

mimes.h264 === 'video/h264'

mimes.jpgv === 'video/jpeg'

mimes.jpm === 'image/jpm'

mimes.jpgm === 'video/jpm'

mimes.mj2 === 'video/mj2'

mimes.mjp2 === 'video/mj2'

mimes.ts === 'video/mp2t'

mimes.mp4 === 'video/mp4'

mimes.mp4v === 'video/mp4'

mimes.mpg4 === 'video/mp4'

mimes.mpeg === 'video/mpeg'

mimes.mpg === 'video/mpeg'

mimes.mpe === 'video/mpeg'

mimes.m1v === 'video/mpeg'

mimes.m2v === 'video/mpeg'

mimes.ogv === 'video/ogg'

mimes.qt === 'video/quicktime'

mimes.mov === 'video/quicktime'

mimes.uvh === 'video/vnd.dece.hd'

mimes.uvvh === 'video/vnd.dece.hd'

mimes.uvm === 'video/vnd.dece.mobile'

mimes.uvvm === 'video/vnd.dece.mobile'

mimes.uvp === 'video/vnd.dece.pd'

mimes.uvvp === 'video/vnd.dece.pd'

mimes.uvs === 'video/vnd.dece.sd'

mimes.uvvs === 'video/vnd.dece.sd'

mimes.uvv === 'video/vnd.dece.video'

mimes.uvvv === 'video/vnd.dece.video'

mimes.dvb === 'video/vnd.dvb.file'

mimes.fvt === 'video/vnd.fvt'

mimes.mxu === 'video/vnd.mpegurl'

mimes.m4u === 'video/vnd.mpegurl'

mimes.pyv === 'video/vnd.ms-playready.media.pyv'

mimes.uvu === 'video/vnd.uvvu.mp4'

mimes.uvvu === 'video/vnd.uvvu.mp4'

mimes.viv === 'video/vnd.vivo'

mimes.webm === 'video/webm'

mimes.f4v === 'video/x-f4v'

mimes.fli === 'video/x-fli'

mimes.flv === 'video/x-flv'

mimes.m4v === 'video/x-m4v'

mimes.mkv === 'video/x-matroska'

mimes.mk3d === 'video/x-matroska'

mimes.mks === 'video/x-matroska'

mimes.mng === 'video/x-mng'

mimes.asf === 'video/x-ms-asf'

mimes.asx === 'video/x-ms-asf'

mimes.vob === 'video/x-ms-vob'

mimes.wm === 'video/x-ms-wm'

mimes.wmv === 'video/x-ms-wmv'

mimes.wmx === 'video/x-ms-wmx'

mimes.wvx === 'video/x-ms-wvx'

mimes.avi === 'video/x-msvideo'

mimes.movie === 'video/x-sgi-movie'

mimes.smv === 'video/x-smv'

mimes.ice === 'x-conference/x-cooltalk'
```

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic/mime-types.svg
[npm-url]: https://www.npmjs.com/package/@magic/mime-types
[travis-image]: https://img.shields.io/travis/com/magic/mime-types.svg?branch=master
[travis-url]: https://travis-ci.com/magic/mime-types
[appveyor-image]: https://img.shields.io/appveyor/ci/magic/mime-types/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magic/mime-types/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic/mime-types/badge.svg
[coveralls-url]: https://coveralls.io/github/magic/mime-types
[greenkeeper-image]: https://badges.greenkeeper.io/magic/mime-types.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic/mime-types.svg
[snyk-image]: https://snyk.io/test/github/magic/mime-types/badge.svg
[snyk-url]: https://snyk.io/test/github/magic/mime-types
