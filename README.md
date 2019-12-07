# @magic/mime-types

exports all mime-db mimetypes that have file extensions.

exports a key => value store,
where key = extension and value = mime/type

[html-docs](https://magic.github.io/mime-types)

### installation
be in a nodejs project
```bash
npm install @magic/mime-types
```

## do not change this README file!

### recreate README.md
**README.md should never be changed manually.**
run
```bash
./bin/bin.mjs docs
```
to rebuild the file.


### recreate src/index.mjs
**src/index.mjs should never be changed manually.**
run
```bash
./bin/bin.mjs build
```
to rebuild the file.


### import / usage
```javascript
import mimes from '@magic/mime-types'


console.log(mimes.ez)
// logs application/andrew-inset

console.log(mimes.aw)
// logs application/applixware

console.log(mimes.atom)
// logs application/atom+xml

console.log(mimes.atomcat)
// logs application/atomcat+xml

console.log(mimes.atomsvc)
// logs application/atomsvc+xml

console.log(mimes.bdoc)
// logs application/bdoc

console.log(mimes.ccxml)
// logs application/ccxml+xml

console.log(mimes.cdmia)
// logs application/cdmi-capability

console.log(mimes.cdmic)
// logs application/cdmi-container

console.log(mimes.cdmid)
// logs application/cdmi-domain

console.log(mimes.cdmio)
// logs application/cdmi-object

console.log(mimes.cdmiq)
// logs application/cdmi-queue

console.log(mimes.cu)
// logs application/cu-seeme

console.log(mimes.mpd)
// logs application/dash+xml

console.log(mimes.davmount)
// logs application/davmount+xml

console.log(mimes.dbk)
// logs application/docbook+xml

console.log(mimes.dssc)
// logs application/dssc+der

console.log(mimes.xdssc)
// logs application/dssc+xml

console.log(mimes.ecma)
// logs application/ecmascript

console.log(mimes.es)
// logs application/ecmascript

console.log(mimes.emma)
// logs application/emma+xml

console.log(mimes.epub)
// logs application/epub+zip

console.log(mimes.exi)
// logs application/exi

console.log(mimes.pfr)
// logs application/font-tdpfr

console.log(mimes.geojson)
// logs application/geo+json

console.log(mimes.gml)
// logs application/gml+xml

console.log(mimes.gpx)
// logs application/gpx+xml

console.log(mimes.gxf)
// logs application/gxf

console.log(mimes.gz)
// logs application/gzip

console.log(mimes.hjson)
// logs application/hjson

console.log(mimes.stk)
// logs application/hyperstudio

console.log(mimes.ink)
// logs application/inkml+xml

console.log(mimes.inkml)
// logs application/inkml+xml

console.log(mimes.ipfix)
// logs application/ipfix

console.log(mimes.jar)
// logs application/java-archive

console.log(mimes.war)
// logs application/java-archive

console.log(mimes.ear)
// logs application/java-archive

console.log(mimes.ser)
// logs application/java-serialized-object

console.log(mimes.class)
// logs application/java-vm

console.log(mimes.js)
// logs application/javascript

console.log(mimes.mjs)
// logs application/javascript

console.log(mimes.json)
// logs application/json

console.log(mimes.map)
// logs application/json

console.log(mimes.json5)
// logs application/json5

console.log(mimes.jsonml)
// logs application/jsonml+json

console.log(mimes.jsonld)
// logs application/ld+json

console.log(mimes.lostxml)
// logs application/lost+xml

console.log(mimes.hqx)
// logs application/mac-binhex40

console.log(mimes.cpt)
// logs application/mac-compactpro

console.log(mimes.mads)
// logs application/mads+xml

console.log(mimes.webmanifest)
// logs application/manifest+json

console.log(mimes.mrc)
// logs application/marc

console.log(mimes.mrcx)
// logs application/marcxml+xml

console.log(mimes.ma)
// logs application/mathematica

console.log(mimes.nb)
// logs application/mathematica

console.log(mimes.mb)
// logs application/mathematica

console.log(mimes.mathml)
// logs application/mathml+xml

console.log(mimes.mbox)
// logs application/mbox

console.log(mimes.mscml)
// logs application/mediaservercontrol+xml

console.log(mimes.metalink)
// logs application/metalink+xml

console.log(mimes.meta4)
// logs application/metalink4+xml

console.log(mimes.mets)
// logs application/mets+xml

console.log(mimes.mods)
// logs application/mods+xml

console.log(mimes.m21)
// logs application/mp21

console.log(mimes.mp21)
// logs application/mp21

console.log(mimes.mp4s)
// logs application/mp4

console.log(mimes.m4p)
// logs application/mp4

console.log(mimes.doc)
// logs application/msword

console.log(mimes.dot)
// logs application/msword

console.log(mimes.mxf)
// logs application/mxf

console.log(mimes.nq)
// logs application/n-quads

console.log(mimes.nt)
// logs application/n-triples

console.log(mimes.bin)
// logs application/octet-stream

console.log(mimes.dms)
// logs application/octet-stream

console.log(mimes.lrf)
// logs application/octet-stream

console.log(mimes.mar)
// logs application/octet-stream

console.log(mimes.so)
// logs application/octet-stream

console.log(mimes.dist)
// logs application/octet-stream

console.log(mimes.distz)
// logs application/octet-stream

console.log(mimes.pkg)
// logs application/octet-stream

console.log(mimes.bpk)
// logs application/octet-stream

console.log(mimes.dump)
// logs application/octet-stream

console.log(mimes.elc)
// logs application/octet-stream

console.log(mimes.deploy)
// logs application/octet-stream

console.log(mimes.exe)
// logs application/x-msdos-program

console.log(mimes.dll)
// logs application/octet-stream

console.log(mimes.deb)
// logs application/x-debian-package

console.log(mimes.dmg)
// logs application/octet-stream

console.log(mimes.iso)
// logs application/octet-stream

console.log(mimes.img)
// logs application/octet-stream

console.log(mimes.msi)
// logs application/octet-stream

console.log(mimes.msp)
// logs application/octet-stream

console.log(mimes.msm)
// logs application/octet-stream

console.log(mimes.buffer)
// logs application/octet-stream

console.log(mimes.oda)
// logs application/oda

console.log(mimes.opf)
// logs application/oebps-package+xml

console.log(mimes.ogx)
// logs application/ogg

console.log(mimes.omdoc)
// logs application/omdoc+xml

console.log(mimes.onetoc)
// logs application/onenote

console.log(mimes.onetoc2)
// logs application/onenote

console.log(mimes.onetmp)
// logs application/onenote

console.log(mimes.onepkg)
// logs application/onenote

console.log(mimes.oxps)
// logs application/oxps

console.log(mimes.xer)
// logs application/patch-ops-error+xml

console.log(mimes.pdf)
// logs application/pdf

console.log(mimes.pgp)
// logs application/pgp-encrypted

console.log(mimes.asc)
// logs application/pgp-signature

console.log(mimes.sig)
// logs application/pgp-signature

console.log(mimes.prf)
// logs application/pics-rules

console.log(mimes.p10)
// logs application/pkcs10

console.log(mimes.p7m)
// logs application/pkcs7-mime

console.log(mimes.p7c)
// logs application/pkcs7-mime

console.log(mimes.p7s)
// logs application/pkcs7-signature

console.log(mimes.p8)
// logs application/pkcs8

console.log(mimes.ac)
// logs application/pkix-attr-cert

console.log(mimes.cer)
// logs application/pkix-cert

console.log(mimes.crl)
// logs application/pkix-crl

console.log(mimes.pkipath)
// logs application/pkix-pkipath

console.log(mimes.pki)
// logs application/pkixcmp

console.log(mimes.pls)
// logs application/pls+xml

console.log(mimes.ai)
// logs application/postscript

console.log(mimes.eps)
// logs application/postscript

console.log(mimes.ps)
// logs application/postscript

console.log(mimes.cww)
// logs application/prs.cww

console.log(mimes.pskcxml)
// logs application/pskc+xml

console.log(mimes.raml)
// logs application/raml+yaml

console.log(mimes.rdf)
// logs application/rdf+xml

console.log(mimes.owl)
// logs application/rdf+xml

console.log(mimes.rif)
// logs application/reginfo+xml

console.log(mimes.rnc)
// logs application/relax-ng-compact-syntax

console.log(mimes.rl)
// logs application/resource-lists+xml

console.log(mimes.rld)
// logs application/resource-lists-diff+xml

console.log(mimes.rs)
// logs application/rls-services+xml

console.log(mimes.gbr)
// logs application/rpki-ghostbusters

console.log(mimes.mft)
// logs application/rpki-manifest

console.log(mimes.roa)
// logs application/rpki-roa

console.log(mimes.rsd)
// logs application/rsd+xml

console.log(mimes.rss)
// logs application/rss+xml

console.log(mimes.rtf)
// logs text/rtf

console.log(mimes.sbml)
// logs application/sbml+xml

console.log(mimes.scq)
// logs application/scvp-cv-request

console.log(mimes.scs)
// logs application/scvp-cv-response

console.log(mimes.spq)
// logs application/scvp-vp-request

console.log(mimes.spp)
// logs application/scvp-vp-response

console.log(mimes.sdp)
// logs application/sdp

console.log(mimes.setpay)
// logs application/set-payment-initiation

console.log(mimes.setreg)
// logs application/set-registration-initiation

console.log(mimes.shf)
// logs application/shf+xml

console.log(mimes.siv)
// logs application/sieve

console.log(mimes.sieve)
// logs application/sieve

console.log(mimes.smi)
// logs application/smil+xml

console.log(mimes.smil)
// logs application/smil+xml

console.log(mimes.rq)
// logs application/sparql-query

console.log(mimes.srx)
// logs application/sparql-results+xml

console.log(mimes.gram)
// logs application/srgs

console.log(mimes.grxml)
// logs application/srgs+xml

console.log(mimes.sru)
// logs application/sru+xml

console.log(mimes.ssdl)
// logs application/ssdl+xml

console.log(mimes.ssml)
// logs application/ssml+xml

console.log(mimes.tei)
// logs application/tei+xml

console.log(mimes.teicorpus)
// logs application/tei+xml

console.log(mimes.tfi)
// logs application/thraud+xml

console.log(mimes.tsd)
// logs application/timestamped-data

console.log(mimes.toml)
// logs application/toml

console.log(mimes.plb)
// logs application/vnd.3gpp.pic-bw-large

console.log(mimes.psb)
// logs application/vnd.3gpp.pic-bw-small

console.log(mimes.pvb)
// logs application/vnd.3gpp.pic-bw-var

console.log(mimes.tcap)
// logs application/vnd.3gpp2.tcap

console.log(mimes.pwn)
// logs application/vnd.3m.post-it-notes

console.log(mimes.aso)
// logs application/vnd.accpac.simply.aso

console.log(mimes.imp)
// logs application/vnd.accpac.simply.imp

console.log(mimes.acu)
// logs application/vnd.acucobol

console.log(mimes.atc)
// logs application/vnd.acucorp

console.log(mimes.acutc)
// logs application/vnd.acucorp

console.log(mimes.air)
// logs application/vnd.adobe.air-application-installer-package+zip

console.log(mimes.fcdt)
// logs application/vnd.adobe.formscentral.fcdt

console.log(mimes.fxp)
// logs application/vnd.adobe.fxp

console.log(mimes.fxpl)
// logs application/vnd.adobe.fxp

console.log(mimes.xdp)
// logs application/vnd.adobe.xdp+xml

console.log(mimes.xfdf)
// logs application/vnd.adobe.xfdf

console.log(mimes.ahead)
// logs application/vnd.ahead.space

console.log(mimes.azf)
// logs application/vnd.airzip.filesecure.azf

console.log(mimes.azs)
// logs application/vnd.airzip.filesecure.azs

console.log(mimes.azw)
// logs application/vnd.amazon.ebook

console.log(mimes.acc)
// logs application/vnd.americandynamics.acc

console.log(mimes.ami)
// logs application/vnd.amiga.ami

console.log(mimes.apk)
// logs application/vnd.android.package-archive

console.log(mimes.cii)
// logs application/vnd.anser-web-certificate-issue-initiation

console.log(mimes.fti)
// logs application/vnd.anser-web-funds-transfer-initiation

console.log(mimes.atx)
// logs application/vnd.antix.game-component

console.log(mimes.mpkg)
// logs application/vnd.apple.installer+xml

console.log(mimes.keynote)
// logs application/vnd.apple.keynote

console.log(mimes.m3u8)
// logs application/vnd.apple.mpegurl

console.log(mimes.numbers)
// logs application/vnd.apple.numbers

console.log(mimes.pages)
// logs application/vnd.apple.pages

console.log(mimes.pkpass)
// logs application/vnd.apple.pkpass

console.log(mimes.swi)
// logs application/vnd.aristanetworks.swi

console.log(mimes.iota)
// logs application/vnd.astraea-software.iota

console.log(mimes.aep)
// logs application/vnd.audiograph

console.log(mimes.mpm)
// logs application/vnd.blueice.multipass

console.log(mimes.bmi)
// logs application/vnd.bmi

console.log(mimes.rep)
// logs application/vnd.businessobjects

console.log(mimes.cdxml)
// logs application/vnd.chemdraw+xml

console.log(mimes.mmd)
// logs application/vnd.chipnuts.karaoke-mmd

console.log(mimes.cdy)
// logs application/vnd.cinderella

console.log(mimes.csl)
// logs application/vnd.citationstyles.style+xml

console.log(mimes.cla)
// logs application/vnd.claymore

console.log(mimes.rp9)
// logs application/vnd.cloanto.rp9

console.log(mimes.c4g)
// logs application/vnd.clonk.c4group

console.log(mimes.c4d)
// logs application/vnd.clonk.c4group

console.log(mimes.c4f)
// logs application/vnd.clonk.c4group

console.log(mimes.c4p)
// logs application/vnd.clonk.c4group

console.log(mimes.c4u)
// logs application/vnd.clonk.c4group

console.log(mimes.c11amc)
// logs application/vnd.cluetrust.cartomobile-config

console.log(mimes.c11amz)
// logs application/vnd.cluetrust.cartomobile-config-pkg

console.log(mimes.csp)
// logs application/vnd.commonspace

console.log(mimes.cdbcmsg)
// logs application/vnd.contact.cmsg

console.log(mimes.cmc)
// logs application/vnd.cosmocaller

console.log(mimes.clkx)
// logs application/vnd.crick.clicker

console.log(mimes.clkk)
// logs application/vnd.crick.clicker.keyboard

console.log(mimes.clkp)
// logs application/vnd.crick.clicker.palette

console.log(mimes.clkt)
// logs application/vnd.crick.clicker.template

console.log(mimes.clkw)
// logs application/vnd.crick.clicker.wordbank

console.log(mimes.wbs)
// logs application/vnd.criticaltools.wbs+xml

console.log(mimes.pml)
// logs application/vnd.ctc-posml

console.log(mimes.ppd)
// logs application/vnd.cups-ppd

console.log(mimes.car)
// logs application/vnd.curl.car

console.log(mimes.pcurl)
// logs application/vnd.curl.pcurl

console.log(mimes.dart)
// logs application/vnd.dart

console.log(mimes.rdz)
// logs application/vnd.data-vision.rdz

console.log(mimes.uvf)
// logs application/vnd.dece.data

console.log(mimes.uvvf)
// logs application/vnd.dece.data

console.log(mimes.uvd)
// logs application/vnd.dece.data

console.log(mimes.uvvd)
// logs application/vnd.dece.data

console.log(mimes.uvt)
// logs application/vnd.dece.ttml+xml

console.log(mimes.uvvt)
// logs application/vnd.dece.ttml+xml

console.log(mimes.uvx)
// logs application/vnd.dece.unspecified

console.log(mimes.uvvx)
// logs application/vnd.dece.unspecified

console.log(mimes.uvz)
// logs application/vnd.dece.zip

console.log(mimes.uvvz)
// logs application/vnd.dece.zip

console.log(mimes.fe_launch)
// logs application/vnd.denovo.fcselayout-link

console.log(mimes.dna)
// logs application/vnd.dna

console.log(mimes.mlp)
// logs application/vnd.dolby.mlp

console.log(mimes.dpg)
// logs application/vnd.dpgraph

console.log(mimes.dfac)
// logs application/vnd.dreamfactory

console.log(mimes.kpxx)
// logs application/vnd.ds-keypoint

console.log(mimes.ait)
// logs application/vnd.dvb.ait

console.log(mimes.svc)
// logs application/vnd.dvb.service

console.log(mimes.geo)
// logs application/vnd.dynageo

console.log(mimes.mag)
// logs application/vnd.ecowin.chart

console.log(mimes.nml)
// logs application/vnd.enliven

console.log(mimes.esf)
// logs application/vnd.epson.esf

console.log(mimes.msf)
// logs application/vnd.epson.msf

console.log(mimes.qam)
// logs application/vnd.epson.quickanime

console.log(mimes.slt)
// logs application/vnd.epson.salt

console.log(mimes.ssf)
// logs application/vnd.epson.ssf

console.log(mimes.es3)
// logs application/vnd.eszigno3+xml

console.log(mimes.et3)
// logs application/vnd.eszigno3+xml

console.log(mimes.ez2)
// logs application/vnd.ezpix-album

console.log(mimes.ez3)
// logs application/vnd.ezpix-package

console.log(mimes.fdf)
// logs application/vnd.fdf

console.log(mimes.mseed)
// logs application/vnd.fdsn.mseed

console.log(mimes.seed)
// logs application/vnd.fdsn.seed

console.log(mimes.dataless)
// logs application/vnd.fdsn.seed

console.log(mimes.gph)
// logs application/vnd.flographit

console.log(mimes.ftc)
// logs application/vnd.fluxtime.clip

console.log(mimes.fm)
// logs application/vnd.framemaker

console.log(mimes.frame)
// logs application/vnd.framemaker

console.log(mimes.maker)
// logs application/vnd.framemaker

console.log(mimes.book)
// logs application/vnd.framemaker

console.log(mimes.fnc)
// logs application/vnd.frogans.fnc

console.log(mimes.ltf)
// logs application/vnd.frogans.ltf

console.log(mimes.fsc)
// logs application/vnd.fsc.weblaunch

console.log(mimes.oas)
// logs application/vnd.fujitsu.oasys

console.log(mimes.oa2)
// logs application/vnd.fujitsu.oasys2

console.log(mimes.oa3)
// logs application/vnd.fujitsu.oasys3

console.log(mimes.fg5)
// logs application/vnd.fujitsu.oasysgp

console.log(mimes.bh2)
// logs application/vnd.fujitsu.oasysprs

console.log(mimes.ddd)
// logs application/vnd.fujixerox.ddd

console.log(mimes.xdw)
// logs application/vnd.fujixerox.docuworks

console.log(mimes.xbd)
// logs application/vnd.fujixerox.docuworks.binder

console.log(mimes.fzs)
// logs application/vnd.fuzzysheet

console.log(mimes.txd)
// logs application/vnd.genomatix.tuxedo

console.log(mimes.ggb)
// logs application/vnd.geogebra.file

console.log(mimes.ggt)
// logs application/vnd.geogebra.tool

console.log(mimes.gex)
// logs application/vnd.geometry-explorer

console.log(mimes.gre)
// logs application/vnd.geometry-explorer

console.log(mimes.gxt)
// logs application/vnd.geonext

console.log(mimes.g2w)
// logs application/vnd.geoplan

console.log(mimes.g3w)
// logs application/vnd.geospace

console.log(mimes.gmx)
// logs application/vnd.gmx

console.log(mimes.gdoc)
// logs application/vnd.google-apps.document

console.log(mimes.gslides)
// logs application/vnd.google-apps.presentation

console.log(mimes.gsheet)
// logs application/vnd.google-apps.spreadsheet

console.log(mimes.kml)
// logs application/vnd.google-earth.kml+xml

console.log(mimes.kmz)
// logs application/vnd.google-earth.kmz

console.log(mimes.gqf)
// logs application/vnd.grafeq

console.log(mimes.gqs)
// logs application/vnd.grafeq

console.log(mimes.gac)
// logs application/vnd.groove-account

console.log(mimes.ghf)
// logs application/vnd.groove-help

console.log(mimes.gim)
// logs application/vnd.groove-identity-message

console.log(mimes.grv)
// logs application/vnd.groove-injector

console.log(mimes.gtm)
// logs application/vnd.groove-tool-message

console.log(mimes.tpl)
// logs application/vnd.groove-tool-template

console.log(mimes.vcg)
// logs application/vnd.groove-vcard

console.log(mimes.hal)
// logs application/vnd.hal+xml

console.log(mimes.zmm)
// logs application/vnd.handheld-entertainment+xml

console.log(mimes.hbci)
// logs application/vnd.hbci

console.log(mimes.les)
// logs application/vnd.hhe.lesson-player

console.log(mimes.hpgl)
// logs application/vnd.hp-hpgl

console.log(mimes.hpid)
// logs application/vnd.hp-hpid

console.log(mimes.hps)
// logs application/vnd.hp-hps

console.log(mimes.jlt)
// logs application/vnd.hp-jlyt

console.log(mimes.pcl)
// logs application/vnd.hp-pcl

console.log(mimes.pclxl)
// logs application/vnd.hp-pclxl

console.log(mimes.sfd-hdstx)
// logs application/vnd.hydrostatix.sof-data

console.log(mimes.mpy)
// logs application/vnd.ibm.minipay

console.log(mimes.afp)
// logs application/vnd.ibm.modcap

console.log(mimes.listafp)
// logs application/vnd.ibm.modcap

console.log(mimes.list3820)
// logs application/vnd.ibm.modcap

console.log(mimes.irm)
// logs application/vnd.ibm.rights-management

console.log(mimes.sc)
// logs application/vnd.ibm.secure-container

console.log(mimes.icc)
// logs application/vnd.iccprofile

console.log(mimes.icm)
// logs application/vnd.iccprofile

console.log(mimes.igl)
// logs application/vnd.igloader

console.log(mimes.ivp)
// logs application/vnd.immervision-ivp

console.log(mimes.ivu)
// logs application/vnd.immervision-ivu

console.log(mimes.igm)
// logs application/vnd.insors.igm

console.log(mimes.xpw)
// logs application/vnd.intercon.formnet

console.log(mimes.xpx)
// logs application/vnd.intercon.formnet

console.log(mimes.i2g)
// logs application/vnd.intergeo

console.log(mimes.qbo)
// logs application/vnd.intu.qbo

console.log(mimes.qfx)
// logs application/vnd.intu.qfx

console.log(mimes.rcprofile)
// logs application/vnd.ipunplugged.rcprofile

console.log(mimes.irp)
// logs application/vnd.irepository.package+xml

console.log(mimes.xpr)
// logs application/vnd.is-xpr

console.log(mimes.fcs)
// logs application/vnd.isac.fcs

console.log(mimes.jam)
// logs application/vnd.jam

console.log(mimes.rms)
// logs application/vnd.jcp.javame.midlet-rms

console.log(mimes.jisp)
// logs application/vnd.jisp

console.log(mimes.joda)
// logs application/vnd.joost.joda-archive

console.log(mimes.ktz)
// logs application/vnd.kahootz

console.log(mimes.ktr)
// logs application/vnd.kahootz

console.log(mimes.karbon)
// logs application/vnd.kde.karbon

console.log(mimes.chrt)
// logs application/vnd.kde.kchart

console.log(mimes.kfo)
// logs application/vnd.kde.kformula

console.log(mimes.flw)
// logs application/vnd.kde.kivio

console.log(mimes.kon)
// logs application/vnd.kde.kontour

console.log(mimes.kpr)
// logs application/vnd.kde.kpresenter

console.log(mimes.kpt)
// logs application/vnd.kde.kpresenter

console.log(mimes.ksp)
// logs application/vnd.kde.kspread

console.log(mimes.kwd)
// logs application/vnd.kde.kword

console.log(mimes.kwt)
// logs application/vnd.kde.kword

console.log(mimes.htke)
// logs application/vnd.kenameaapp

console.log(mimes.kia)
// logs application/vnd.kidspiration

console.log(mimes.kne)
// logs application/vnd.kinar

console.log(mimes.knp)
// logs application/vnd.kinar

console.log(mimes.skp)
// logs application/vnd.koan

console.log(mimes.skd)
// logs application/vnd.koan

console.log(mimes.skt)
// logs application/vnd.koan

console.log(mimes.skm)
// logs application/vnd.koan

console.log(mimes.sse)
// logs application/vnd.kodak-descriptor

console.log(mimes.lasxml)
// logs application/vnd.las.las+xml

console.log(mimes.lbd)
// logs application/vnd.llamagraphics.life-balance.desktop

console.log(mimes.lbe)
// logs application/vnd.llamagraphics.life-balance.exchange+xml

console.log(mimes.123)
// logs application/vnd.lotus-1-2-3

console.log(mimes.apr)
// logs application/vnd.lotus-approach

console.log(mimes.pre)
// logs application/vnd.lotus-freelance

console.log(mimes.nsf)
// logs application/vnd.lotus-notes

console.log(mimes.org)
// logs text/x-org

console.log(mimes.scm)
// logs application/vnd.lotus-screencam

console.log(mimes.lwp)
// logs application/vnd.lotus-wordpro

console.log(mimes.portpkg)
// logs application/vnd.macports.portpkg

console.log(mimes.mcd)
// logs application/vnd.mcd

console.log(mimes.mc1)
// logs application/vnd.medcalcdata

console.log(mimes.cdkey)
// logs application/vnd.mediastation.cdkey

console.log(mimes.mwf)
// logs application/vnd.mfer

console.log(mimes.mfm)
// logs application/vnd.mfmp

console.log(mimes.flo)
// logs application/vnd.micrografx.flo

console.log(mimes.igx)
// logs application/vnd.micrografx.igx

console.log(mimes.mif)
// logs application/vnd.mif

console.log(mimes.daf)
// logs application/vnd.mobius.daf

console.log(mimes.dis)
// logs application/vnd.mobius.dis

console.log(mimes.mbk)
// logs application/vnd.mobius.mbk

console.log(mimes.mqy)
// logs application/vnd.mobius.mqy

console.log(mimes.msl)
// logs application/vnd.mobius.msl

console.log(mimes.plc)
// logs application/vnd.mobius.plc

console.log(mimes.txf)
// logs application/vnd.mobius.txf

console.log(mimes.mpn)
// logs application/vnd.mophun.application

console.log(mimes.mpc)
// logs application/vnd.mophun.certificate

console.log(mimes.xul)
// logs application/vnd.mozilla.xul+xml

console.log(mimes.cil)
// logs application/vnd.ms-artgalry

console.log(mimes.cab)
// logs application/vnd.ms-cab-compressed

console.log(mimes.xls)
// logs application/vnd.ms-excel

console.log(mimes.xlm)
// logs application/vnd.ms-excel

console.log(mimes.xla)
// logs application/vnd.ms-excel

console.log(mimes.xlc)
// logs application/vnd.ms-excel

console.log(mimes.xlt)
// logs application/vnd.ms-excel

console.log(mimes.xlw)
// logs application/vnd.ms-excel

console.log(mimes.xlam)
// logs application/vnd.ms-excel.addin.macroenabled.12

console.log(mimes.xlsb)
// logs application/vnd.ms-excel.sheet.binary.macroenabled.12

console.log(mimes.xlsm)
// logs application/vnd.ms-excel.sheet.macroenabled.12

console.log(mimes.xltm)
// logs application/vnd.ms-excel.template.macroenabled.12

console.log(mimes.eot)
// logs application/vnd.ms-fontobject

console.log(mimes.chm)
// logs application/vnd.ms-htmlhelp

console.log(mimes.ims)
// logs application/vnd.ms-ims

console.log(mimes.lrm)
// logs application/vnd.ms-lrm

console.log(mimes.thmx)
// logs application/vnd.ms-officetheme

console.log(mimes.msg)
// logs application/vnd.ms-outlook

console.log(mimes.cat)
// logs application/vnd.ms-pki.seccat

console.log(mimes.stl)
// logs model/stl

console.log(mimes.ppt)
// logs application/vnd.ms-powerpoint

console.log(mimes.pps)
// logs application/vnd.ms-powerpoint

console.log(mimes.pot)
// logs application/vnd.ms-powerpoint

console.log(mimes.ppam)
// logs application/vnd.ms-powerpoint.addin.macroenabled.12

console.log(mimes.pptm)
// logs application/vnd.ms-powerpoint.presentation.macroenabled.12

console.log(mimes.sldm)
// logs application/vnd.ms-powerpoint.slide.macroenabled.12

console.log(mimes.ppsm)
// logs application/vnd.ms-powerpoint.slideshow.macroenabled.12

console.log(mimes.potm)
// logs application/vnd.ms-powerpoint.template.macroenabled.12

console.log(mimes.mpp)
// logs application/vnd.ms-project

console.log(mimes.mpt)
// logs application/vnd.ms-project

console.log(mimes.docm)
// logs application/vnd.ms-word.document.macroenabled.12

console.log(mimes.dotm)
// logs application/vnd.ms-word.template.macroenabled.12

console.log(mimes.wps)
// logs application/vnd.ms-works

console.log(mimes.wks)
// logs application/vnd.ms-works

console.log(mimes.wcm)
// logs application/vnd.ms-works

console.log(mimes.wdb)
// logs application/vnd.ms-works

console.log(mimes.wpl)
// logs application/vnd.ms-wpl

console.log(mimes.xps)
// logs application/vnd.ms-xpsdocument

console.log(mimes.mseq)
// logs application/vnd.mseq

console.log(mimes.mus)
// logs application/vnd.musician

console.log(mimes.msty)
// logs application/vnd.muvee.style

console.log(mimes.taglet)
// logs application/vnd.mynfc

console.log(mimes.nlu)
// logs application/vnd.neurolanguage.nlu

console.log(mimes.ntf)
// logs application/vnd.nitf

console.log(mimes.nitf)
// logs application/vnd.nitf

console.log(mimes.nnd)
// logs application/vnd.noblenet-directory

console.log(mimes.nns)
// logs application/vnd.noblenet-sealer

console.log(mimes.nnw)
// logs application/vnd.noblenet-web

console.log(mimes.ngdat)
// logs application/vnd.nokia.n-gage.data

console.log(mimes.n-gage)
// logs application/vnd.nokia.n-gage.symbian.install

console.log(mimes.rpst)
// logs application/vnd.nokia.radio-preset

console.log(mimes.rpss)
// logs application/vnd.nokia.radio-presets

console.log(mimes.edm)
// logs application/vnd.novadigm.edm

console.log(mimes.edx)
// logs application/vnd.novadigm.edx

console.log(mimes.ext)
// logs application/vnd.novadigm.ext

console.log(mimes.odc)
// logs application/vnd.oasis.opendocument.chart

console.log(mimes.otc)
// logs application/vnd.oasis.opendocument.chart-template

console.log(mimes.odb)
// logs application/vnd.oasis.opendocument.database

console.log(mimes.odf)
// logs application/vnd.oasis.opendocument.formula

console.log(mimes.odft)
// logs application/vnd.oasis.opendocument.formula-template

console.log(mimes.odg)
// logs application/vnd.oasis.opendocument.graphics

console.log(mimes.otg)
// logs application/vnd.oasis.opendocument.graphics-template

console.log(mimes.odi)
// logs application/vnd.oasis.opendocument.image

console.log(mimes.oti)
// logs application/vnd.oasis.opendocument.image-template

console.log(mimes.odp)
// logs application/vnd.oasis.opendocument.presentation

console.log(mimes.otp)
// logs application/vnd.oasis.opendocument.presentation-template

console.log(mimes.ods)
// logs application/vnd.oasis.opendocument.spreadsheet

console.log(mimes.ots)
// logs application/vnd.oasis.opendocument.spreadsheet-template

console.log(mimes.odt)
// logs application/vnd.oasis.opendocument.text

console.log(mimes.odm)
// logs application/vnd.oasis.opendocument.text-master

console.log(mimes.ott)
// logs application/vnd.oasis.opendocument.text-template

console.log(mimes.oth)
// logs application/vnd.oasis.opendocument.text-web

console.log(mimes.xo)
// logs application/vnd.olpc-sugar

console.log(mimes.dd2)
// logs application/vnd.oma.dd2+xml

console.log(mimes.oxt)
// logs application/vnd.openofficeorg.extension

console.log(mimes.pptx)
// logs application/vnd.openxmlformats-officedocument.presentationml.presentation

console.log(mimes.sldx)
// logs application/vnd.openxmlformats-officedocument.presentationml.slide

console.log(mimes.ppsx)
// logs application/vnd.openxmlformats-officedocument.presentationml.slideshow

console.log(mimes.potx)
// logs application/vnd.openxmlformats-officedocument.presentationml.template

console.log(mimes.xlsx)
// logs application/vnd.openxmlformats-officedocument.spreadsheetml.sheet

console.log(mimes.xltx)
// logs application/vnd.openxmlformats-officedocument.spreadsheetml.template

console.log(mimes.docx)
// logs application/vnd.openxmlformats-officedocument.wordprocessingml.document

console.log(mimes.dotx)
// logs application/vnd.openxmlformats-officedocument.wordprocessingml.template

console.log(mimes.mgp)
// logs application/vnd.osgeo.mapguide.package

console.log(mimes.dp)
// logs application/vnd.osgi.dp

console.log(mimes.esa)
// logs application/vnd.osgi.subsystem

console.log(mimes.pdb)
// logs application/x-pilot

console.log(mimes.pqa)
// logs application/vnd.palm

console.log(mimes.oprc)
// logs application/vnd.palm

console.log(mimes.paw)
// logs application/vnd.pawaafile

console.log(mimes.str)
// logs application/vnd.pg.format

console.log(mimes.ei6)
// logs application/vnd.pg.osasli

console.log(mimes.efif)
// logs application/vnd.picsel

console.log(mimes.wg)
// logs application/vnd.pmi.widget

console.log(mimes.plf)
// logs application/vnd.pocketlearn

console.log(mimes.pbd)
// logs application/vnd.powerbuilder6

console.log(mimes.box)
// logs application/vnd.previewsystems.box

console.log(mimes.mgz)
// logs application/vnd.proteus.magazine

console.log(mimes.qps)
// logs application/vnd.publishare-delta-tree

console.log(mimes.ptid)
// logs application/vnd.pvi.ptid1

console.log(mimes.qxd)
// logs application/vnd.quark.quarkxpress

console.log(mimes.qxt)
// logs application/vnd.quark.quarkxpress

console.log(mimes.qwd)
// logs application/vnd.quark.quarkxpress

console.log(mimes.qwt)
// logs application/vnd.quark.quarkxpress

console.log(mimes.qxl)
// logs application/vnd.quark.quarkxpress

console.log(mimes.qxb)
// logs application/vnd.quark.quarkxpress

console.log(mimes.bed)
// logs application/vnd.realvnc.bed

console.log(mimes.mxl)
// logs application/vnd.recordare.musicxml

console.log(mimes.musicxml)
// logs application/vnd.recordare.musicxml+xml

console.log(mimes.cryptonote)
// logs application/vnd.rig.cryptonote

console.log(mimes.cod)
// logs application/vnd.rim.cod

console.log(mimes.rm)
// logs application/vnd.rn-realmedia

console.log(mimes.rmvb)
// logs application/vnd.rn-realmedia-vbr

console.log(mimes.link66)
// logs application/vnd.route66.link66+xml

console.log(mimes.st)
// logs application/vnd.sailingtracker.track

console.log(mimes.see)
// logs application/vnd.seemail

console.log(mimes.sema)
// logs application/vnd.sema

console.log(mimes.semd)
// logs application/vnd.semd

console.log(mimes.semf)
// logs application/vnd.semf

console.log(mimes.ifm)
// logs application/vnd.shana.informed.formdata

console.log(mimes.itp)
// logs application/vnd.shana.informed.formtemplate

console.log(mimes.iif)
// logs application/vnd.shana.informed.interchange

console.log(mimes.ipk)
// logs application/vnd.shana.informed.package

console.log(mimes.twd)
// logs application/vnd.simtech-mindmapper

console.log(mimes.twds)
// logs application/vnd.simtech-mindmapper

console.log(mimes.mmf)
// logs application/vnd.smaf

console.log(mimes.teacher)
// logs application/vnd.smart.teacher

console.log(mimes.sdkm)
// logs application/vnd.solent.sdkm+xml

console.log(mimes.sdkd)
// logs application/vnd.solent.sdkm+xml

console.log(mimes.dxp)
// logs application/vnd.spotfire.dxp

console.log(mimes.sfs)
// logs application/vnd.spotfire.sfs

console.log(mimes.sdc)
// logs application/vnd.stardivision.calc

console.log(mimes.sda)
// logs application/vnd.stardivision.draw

console.log(mimes.sdd)
// logs application/vnd.stardivision.impress

console.log(mimes.smf)
// logs application/vnd.stardivision.math

console.log(mimes.sdw)
// logs application/vnd.stardivision.writer

console.log(mimes.vor)
// logs application/vnd.stardivision.writer

console.log(mimes.sgl)
// logs application/vnd.stardivision.writer-global

console.log(mimes.smzip)
// logs application/vnd.stepmania.package

console.log(mimes.sm)
// logs application/vnd.stepmania.stepchart

console.log(mimes.wadl)
// logs application/vnd.sun.wadl+xml

console.log(mimes.sxc)
// logs application/vnd.sun.xml.calc

console.log(mimes.stc)
// logs application/vnd.sun.xml.calc.template

console.log(mimes.sxd)
// logs application/vnd.sun.xml.draw

console.log(mimes.std)
// logs application/vnd.sun.xml.draw.template

console.log(mimes.sxi)
// logs application/vnd.sun.xml.impress

console.log(mimes.sti)
// logs application/vnd.sun.xml.impress.template

console.log(mimes.sxm)
// logs application/vnd.sun.xml.math

console.log(mimes.sxw)
// logs application/vnd.sun.xml.writer

console.log(mimes.sxg)
// logs application/vnd.sun.xml.writer.global

console.log(mimes.stw)
// logs application/vnd.sun.xml.writer.template

console.log(mimes.sus)
// logs application/vnd.sus-calendar

console.log(mimes.susp)
// logs application/vnd.sus-calendar

console.log(mimes.svd)
// logs application/vnd.svd

console.log(mimes.sis)
// logs application/vnd.symbian.install

console.log(mimes.sisx)
// logs application/vnd.symbian.install

console.log(mimes.xsm)
// logs application/vnd.syncml+xml

console.log(mimes.bdm)
// logs application/vnd.syncml.dm+wbxml

console.log(mimes.xdm)
// logs application/vnd.syncml.dm+xml

console.log(mimes.tao)
// logs application/vnd.tao.intent-module-archive

console.log(mimes.pcap)
// logs application/vnd.tcpdump.pcap

console.log(mimes.cap)
// logs application/vnd.tcpdump.pcap

console.log(mimes.dmp)
// logs application/vnd.tcpdump.pcap

console.log(mimes.tmo)
// logs application/vnd.tmobile-livetv

console.log(mimes.tpt)
// logs application/vnd.trid.tpt

console.log(mimes.mxs)
// logs application/vnd.triscape.mxs

console.log(mimes.tra)
// logs application/vnd.trueapp

console.log(mimes.ufd)
// logs application/vnd.ufdl

console.log(mimes.ufdl)
// logs application/vnd.ufdl

console.log(mimes.utz)
// logs application/vnd.uiq.theme

console.log(mimes.umj)
// logs application/vnd.umajin

console.log(mimes.unityweb)
// logs application/vnd.unity

console.log(mimes.uoml)
// logs application/vnd.uoml+xml

console.log(mimes.vcx)
// logs application/vnd.vcx

console.log(mimes.vsd)
// logs application/vnd.visio

console.log(mimes.vst)
// logs application/vnd.visio

console.log(mimes.vss)
// logs application/vnd.visio

console.log(mimes.vsw)
// logs application/vnd.visio

console.log(mimes.vis)
// logs application/vnd.visionary

console.log(mimes.vsf)
// logs application/vnd.vsf

console.log(mimes.wbxml)
// logs application/vnd.wap.wbxml

console.log(mimes.wmlc)
// logs application/vnd.wap.wmlc

console.log(mimes.wmlsc)
// logs application/vnd.wap.wmlscriptc

console.log(mimes.wtb)
// logs application/vnd.webturbo

console.log(mimes.nbp)
// logs application/vnd.wolfram.player

console.log(mimes.wpd)
// logs application/vnd.wordperfect

console.log(mimes.wqd)
// logs application/vnd.wqd

console.log(mimes.stf)
// logs application/vnd.wt.stf

console.log(mimes.xar)
// logs application/vnd.xara

console.log(mimes.xfdl)
// logs application/vnd.xfdl

console.log(mimes.hvd)
// logs application/vnd.yamaha.hv-dic

console.log(mimes.hvs)
// logs application/vnd.yamaha.hv-script

console.log(mimes.hvp)
// logs application/vnd.yamaha.hv-voice

console.log(mimes.osf)
// logs application/vnd.yamaha.openscoreformat

console.log(mimes.osfpvg)
// logs application/vnd.yamaha.openscoreformat.osfpvg+xml

console.log(mimes.saf)
// logs application/vnd.yamaha.smaf-audio

console.log(mimes.spf)
// logs application/vnd.yamaha.smaf-phrase

console.log(mimes.cmp)
// logs application/vnd.yellowriver-custom-menu

console.log(mimes.zir)
// logs application/vnd.zul

console.log(mimes.zirz)
// logs application/vnd.zul

console.log(mimes.zaz)
// logs application/vnd.zzazz.deck+xml

console.log(mimes.vxml)
// logs application/voicexml+xml

console.log(mimes.wasm)
// logs application/wasm

console.log(mimes.wgt)
// logs application/widget

console.log(mimes.hlp)
// logs application/winhlp

console.log(mimes.wsdl)
// logs application/wsdl+xml

console.log(mimes.wspolicy)
// logs application/wspolicy+xml

console.log(mimes.7z)
// logs application/x-7z-compressed

console.log(mimes.abw)
// logs application/x-abiword

console.log(mimes.ace)
// logs application/x-ace-compressed

console.log(mimes.dmg)
// logs application/octet-stream

console.log(mimes.arj)
// logs application/x-arj

console.log(mimes.aab)
// logs application/x-authorware-bin

console.log(mimes.x32)
// logs application/x-authorware-bin

console.log(mimes.u32)
// logs application/x-authorware-bin

console.log(mimes.vox)
// logs application/x-authorware-bin

console.log(mimes.aam)
// logs application/x-authorware-map

console.log(mimes.aas)
// logs application/x-authorware-seg

console.log(mimes.bcpio)
// logs application/x-bcpio

console.log(mimes.bdoc)
// logs application/bdoc

console.log(mimes.torrent)
// logs application/x-bittorrent

console.log(mimes.blb)
// logs application/x-blorb

console.log(mimes.blorb)
// logs application/x-blorb

console.log(mimes.bz)
// logs application/x-bzip

console.log(mimes.bz2)
// logs application/x-bzip2

console.log(mimes.boz)
// logs application/x-bzip2

console.log(mimes.cbr)
// logs application/x-cbr

console.log(mimes.cba)
// logs application/x-cbr

console.log(mimes.cbt)
// logs application/x-cbr

console.log(mimes.cbz)
// logs application/x-cbr

console.log(mimes.cb7)
// logs application/x-cbr

console.log(mimes.vcd)
// logs application/x-cdlink

console.log(mimes.cfs)
// logs application/x-cfs-compressed

console.log(mimes.chat)
// logs application/x-chat

console.log(mimes.pgn)
// logs application/x-chess-pgn

console.log(mimes.crx)
// logs application/x-chrome-extension

console.log(mimes.cco)
// logs application/x-cocoa

console.log(mimes.nsc)
// logs application/x-conference

console.log(mimes.cpio)
// logs application/x-cpio

console.log(mimes.csh)
// logs application/x-csh

console.log(mimes.deb)
// logs application/x-debian-package

console.log(mimes.udeb)
// logs application/x-debian-package

console.log(mimes.dgc)
// logs application/x-dgc-compressed

console.log(mimes.dir)
// logs application/x-director

console.log(mimes.dcr)
// logs application/x-director

console.log(mimes.dxr)
// logs application/x-director

console.log(mimes.cst)
// logs application/x-director

console.log(mimes.cct)
// logs application/x-director

console.log(mimes.cxt)
// logs application/x-director

console.log(mimes.w3d)
// logs application/x-director

console.log(mimes.fgd)
// logs application/x-director

console.log(mimes.swa)
// logs application/x-director

console.log(mimes.wad)
// logs application/x-doom

console.log(mimes.ncx)
// logs application/x-dtbncx+xml

console.log(mimes.dtb)
// logs application/x-dtbook+xml

console.log(mimes.res)
// logs application/x-dtbresource+xml

console.log(mimes.dvi)
// logs application/x-dvi

console.log(mimes.evy)
// logs application/x-envoy

console.log(mimes.eva)
// logs application/x-eva

console.log(mimes.bdf)
// logs application/x-font-bdf

console.log(mimes.gsf)
// logs application/x-font-ghostscript

console.log(mimes.psf)
// logs application/x-font-linux-psf

console.log(mimes.pcf)
// logs application/x-font-pcf

console.log(mimes.snf)
// logs application/x-font-snf

console.log(mimes.pfa)
// logs application/x-font-type1

console.log(mimes.pfb)
// logs application/x-font-type1

console.log(mimes.pfm)
// logs application/x-font-type1

console.log(mimes.afm)
// logs application/x-font-type1

console.log(mimes.arc)
// logs application/x-freearc

console.log(mimes.spl)
// logs application/x-futuresplash

console.log(mimes.gca)
// logs application/x-gca-compressed

console.log(mimes.ulx)
// logs application/x-glulx

console.log(mimes.gnumeric)
// logs application/x-gnumeric

console.log(mimes.gramps)
// logs application/x-gramps-xml

console.log(mimes.gtar)
// logs application/x-gtar

console.log(mimes.hdf)
// logs application/x-hdf

console.log(mimes.php)
// logs application/x-httpd-php

console.log(mimes.install)
// logs application/x-install-instructions

console.log(mimes.iso)
// logs application/octet-stream

console.log(mimes.jardiff)
// logs application/x-java-archive-diff

console.log(mimes.jnlp)
// logs application/x-java-jnlp-file

console.log(mimes.latex)
// logs application/x-latex

console.log(mimes.luac)
// logs application/x-lua-bytecode

console.log(mimes.lzh)
// logs application/x-lzh-compressed

console.log(mimes.lha)
// logs application/x-lzh-compressed

console.log(mimes.run)
// logs application/x-makeself

console.log(mimes.mie)
// logs application/x-mie

console.log(mimes.prc)
// logs application/x-pilot

console.log(mimes.mobi)
// logs application/x-mobipocket-ebook

console.log(mimes.application)
// logs application/x-ms-application

console.log(mimes.lnk)
// logs application/x-ms-shortcut

console.log(mimes.wmd)
// logs application/x-ms-wmd

console.log(mimes.wmz)
// logs application/x-ms-wmz

console.log(mimes.xbap)
// logs application/x-ms-xbap

console.log(mimes.mdb)
// logs application/x-msaccess

console.log(mimes.obd)
// logs application/x-msbinder

console.log(mimes.crd)
// logs application/x-mscardfile

console.log(mimes.clp)
// logs application/x-msclip

console.log(mimes.exe)
// logs application/x-msdos-program

console.log(mimes.exe)
// logs application/x-msdos-program

console.log(mimes.dll)
// logs application/octet-stream

console.log(mimes.com)
// logs application/x-msdownload

console.log(mimes.bat)
// logs application/x-msdownload

console.log(mimes.msi)
// logs application/octet-stream

console.log(mimes.mvb)
// logs application/x-msmediaview

console.log(mimes.m13)
// logs application/x-msmediaview

console.log(mimes.m14)
// logs application/x-msmediaview

console.log(mimes.wmf)
// logs image/wmf

console.log(mimes.wmz)
// logs application/x-ms-wmz

console.log(mimes.emf)
// logs image/emf

console.log(mimes.emz)
// logs application/x-msmetafile

console.log(mimes.mny)
// logs application/x-msmoney

console.log(mimes.pub)
// logs application/x-mspublisher

console.log(mimes.scd)
// logs application/x-msschedule

console.log(mimes.trm)
// logs application/x-msterminal

console.log(mimes.wri)
// logs application/x-mswrite

console.log(mimes.nc)
// logs application/x-netcdf

console.log(mimes.cdf)
// logs application/x-netcdf

console.log(mimes.pac)
// logs application/x-ns-proxy-autoconfig

console.log(mimes.nzb)
// logs application/x-nzb

console.log(mimes.pl)
// logs application/x-perl

console.log(mimes.pm)
// logs application/x-perl

console.log(mimes.prc)
// logs application/x-pilot

console.log(mimes.pdb)
// logs application/x-pilot

console.log(mimes.p12)
// logs application/x-pkcs12

console.log(mimes.pfx)
// logs application/x-pkcs12

console.log(mimes.p7b)
// logs application/x-pkcs7-certificates

console.log(mimes.spc)
// logs application/x-pkcs7-certificates

console.log(mimes.p7r)
// logs application/x-pkcs7-certreqresp

console.log(mimes.rar)
// logs application/x-rar-compressed

console.log(mimes.rpm)
// logs application/x-redhat-package-manager

console.log(mimes.ris)
// logs application/x-research-info-systems

console.log(mimes.sea)
// logs application/x-sea

console.log(mimes.sh)
// logs application/x-sh

console.log(mimes.shar)
// logs application/x-shar

console.log(mimes.swf)
// logs application/x-shockwave-flash

console.log(mimes.xap)
// logs application/x-silverlight-app

console.log(mimes.sql)
// logs application/x-sql

console.log(mimes.sit)
// logs application/x-stuffit

console.log(mimes.sitx)
// logs application/x-stuffitx

console.log(mimes.srt)
// logs application/x-subrip

console.log(mimes.sv4cpio)
// logs application/x-sv4cpio

console.log(mimes.sv4crc)
// logs application/x-sv4crc

console.log(mimes.t3)
// logs application/x-t3vm-image

console.log(mimes.gam)
// logs application/x-tads

console.log(mimes.tar)
// logs application/x-tar

console.log(mimes.tcl)
// logs application/x-tcl

console.log(mimes.tk)
// logs application/x-tcl

console.log(mimes.tex)
// logs application/x-tex

console.log(mimes.tfm)
// logs application/x-tex-tfm

console.log(mimes.texinfo)
// logs application/x-texinfo

console.log(mimes.texi)
// logs application/x-texinfo

console.log(mimes.obj)
// logs application/x-tgif

console.log(mimes.ustar)
// logs application/x-ustar

console.log(mimes.hdd)
// logs application/x-virtualbox-hdd

console.log(mimes.ova)
// logs application/x-virtualbox-ova

console.log(mimes.ovf)
// logs application/x-virtualbox-ovf

console.log(mimes.vbox)
// logs application/x-virtualbox-vbox

console.log(mimes.vbox-extpack)
// logs application/x-virtualbox-vbox-extpack

console.log(mimes.vdi)
// logs application/x-virtualbox-vdi

console.log(mimes.vhd)
// logs application/x-virtualbox-vhd

console.log(mimes.vmdk)
// logs application/x-virtualbox-vmdk

console.log(mimes.src)
// logs application/x-wais-source

console.log(mimes.webapp)
// logs application/x-web-app-manifest+json

console.log(mimes.der)
// logs application/x-x509-ca-cert

console.log(mimes.crt)
// logs application/x-x509-ca-cert

console.log(mimes.pem)
// logs application/x-x509-ca-cert

console.log(mimes.fig)
// logs application/x-xfig

console.log(mimes.xlf)
// logs application/x-xliff+xml

console.log(mimes.xpi)
// logs application/x-xpinstall

console.log(mimes.xz)
// logs application/x-xz

console.log(mimes.z1)
// logs application/x-zmachine

console.log(mimes.z2)
// logs application/x-zmachine

console.log(mimes.z3)
// logs application/x-zmachine

console.log(mimes.z4)
// logs application/x-zmachine

console.log(mimes.z5)
// logs application/x-zmachine

console.log(mimes.z6)
// logs application/x-zmachine

console.log(mimes.z7)
// logs application/x-zmachine

console.log(mimes.z8)
// logs application/x-zmachine

console.log(mimes.xaml)
// logs application/xaml+xml

console.log(mimes.xdf)
// logs application/xcap-diff+xml

console.log(mimes.xenc)
// logs application/xenc+xml

console.log(mimes.xhtml)
// logs application/xhtml+xml

console.log(mimes.xht)
// logs application/xhtml+xml

console.log(mimes.xml)
// logs text/xml

console.log(mimes.xsl)
// logs application/xml

console.log(mimes.xsd)
// logs application/xml

console.log(mimes.rng)
// logs application/xml

console.log(mimes.dtd)
// logs application/xml-dtd

console.log(mimes.xop)
// logs application/xop+xml

console.log(mimes.xpl)
// logs application/xproc+xml

console.log(mimes.xslt)
// logs application/xslt+xml

console.log(mimes.xspf)
// logs application/xspf+xml

console.log(mimes.mxml)
// logs application/xv+xml

console.log(mimes.xhvml)
// logs application/xv+xml

console.log(mimes.xvml)
// logs application/xv+xml

console.log(mimes.xvm)
// logs application/xv+xml

console.log(mimes.yang)
// logs application/yang

console.log(mimes.yin)
// logs application/yin+xml

console.log(mimes.zip)
// logs application/zip

console.log(mimes.3gpp)
// logs video/3gpp

console.log(mimes.adp)
// logs audio/adpcm

console.log(mimes.au)
// logs audio/basic

console.log(mimes.snd)
// logs audio/basic

console.log(mimes.mid)
// logs audio/midi

console.log(mimes.midi)
// logs audio/midi

console.log(mimes.kar)
// logs audio/midi

console.log(mimes.rmi)
// logs audio/midi

console.log(mimes.mp3)
// logs audio/mp3

console.log(mimes.m4a)
// logs audio/mp4

console.log(mimes.mp4a)
// logs audio/mp4

console.log(mimes.mpga)
// logs audio/mpeg

console.log(mimes.mp2)
// logs audio/mpeg

console.log(mimes.mp2a)
// logs audio/mpeg

console.log(mimes.mp3)
// logs audio/mp3

console.log(mimes.m2a)
// logs audio/mpeg

console.log(mimes.m3a)
// logs audio/mpeg

console.log(mimes.oga)
// logs audio/ogg

console.log(mimes.ogg)
// logs audio/ogg

console.log(mimes.spx)
// logs audio/ogg

console.log(mimes.s3m)
// logs audio/s3m

console.log(mimes.sil)
// logs audio/silk

console.log(mimes.uva)
// logs audio/vnd.dece.audio

console.log(mimes.uvva)
// logs audio/vnd.dece.audio

console.log(mimes.eol)
// logs audio/vnd.digital-winds

console.log(mimes.dra)
// logs audio/vnd.dra

console.log(mimes.dts)
// logs audio/vnd.dts

console.log(mimes.dtshd)
// logs audio/vnd.dts.hd

console.log(mimes.lvp)
// logs audio/vnd.lucent.voice

console.log(mimes.pya)
// logs audio/vnd.ms-playready.media.pya

console.log(mimes.ecelp4800)
// logs audio/vnd.nuera.ecelp4800

console.log(mimes.ecelp7470)
// logs audio/vnd.nuera.ecelp7470

console.log(mimes.ecelp9600)
// logs audio/vnd.nuera.ecelp9600

console.log(mimes.rip)
// logs audio/vnd.rip

console.log(mimes.wav)
// logs audio/wave

console.log(mimes.wav)
// logs audio/wave

console.log(mimes.weba)
// logs audio/webm

console.log(mimes.aac)
// logs audio/x-aac

console.log(mimes.aif)
// logs audio/x-aiff

console.log(mimes.aiff)
// logs audio/x-aiff

console.log(mimes.aifc)
// logs audio/x-aiff

console.log(mimes.caf)
// logs audio/x-caf

console.log(mimes.flac)
// logs audio/x-flac

console.log(mimes.m4a)
// logs audio/mp4

console.log(mimes.mka)
// logs audio/x-matroska

console.log(mimes.m3u)
// logs audio/x-mpegurl

console.log(mimes.wax)
// logs audio/x-ms-wax

console.log(mimes.wma)
// logs audio/x-ms-wma

console.log(mimes.ram)
// logs audio/x-pn-realaudio

console.log(mimes.ra)
// logs audio/x-realaudio

console.log(mimes.rmp)
// logs audio/x-pn-realaudio-plugin

console.log(mimes.ra)
// logs audio/x-realaudio

console.log(mimes.wav)
// logs audio/wave

console.log(mimes.xm)
// logs audio/xm

console.log(mimes.cdx)
// logs chemical/x-cdx

console.log(mimes.cif)
// logs chemical/x-cif

console.log(mimes.cmdf)
// logs chemical/x-cmdf

console.log(mimes.cml)
// logs chemical/x-cml

console.log(mimes.csml)
// logs chemical/x-csml

console.log(mimes.xyz)
// logs chemical/x-xyz

console.log(mimes.ttc)
// logs font/collection

console.log(mimes.otf)
// logs font/otf

console.log(mimes.ttf)
// logs font/ttf

console.log(mimes.woff)
// logs font/woff

console.log(mimes.woff2)
// logs font/woff2

console.log(mimes.exr)
// logs image/aces

console.log(mimes.apng)
// logs image/apng

console.log(mimes.bmp)
// logs image/bmp

console.log(mimes.cgm)
// logs image/cgm

console.log(mimes.drle)
// logs image/dicom-rle

console.log(mimes.emf)
// logs image/emf

console.log(mimes.fits)
// logs image/fits

console.log(mimes.g3)
// logs image/g3fax

console.log(mimes.gif)
// logs image/gif

console.log(mimes.heic)
// logs image/heic

console.log(mimes.heics)
// logs image/heic-sequence

console.log(mimes.heif)
// logs image/heif

console.log(mimes.heifs)
// logs image/heif-sequence

console.log(mimes.hej2)
// logs image/hej2k

console.log(mimes.hsj2)
// logs image/hsj2

console.log(mimes.ief)
// logs image/ief

console.log(mimes.jls)
// logs image/jls

console.log(mimes.jp2)
// logs image/jp2

console.log(mimes.jpg2)
// logs image/jp2

console.log(mimes.jpeg)
// logs image/jpeg

console.log(mimes.jpg)
// logs image/jpeg

console.log(mimes.jpe)
// logs image/jpeg

console.log(mimes.jph)
// logs image/jph

console.log(mimes.jhc)
// logs image/jphc

console.log(mimes.jpm)
// logs image/jpm

console.log(mimes.jpx)
// logs image/jpx

console.log(mimes.jpf)
// logs image/jpx

console.log(mimes.jxr)
// logs image/jxr

console.log(mimes.jxra)
// logs image/jxra

console.log(mimes.jxrs)
// logs image/jxrs

console.log(mimes.jxs)
// logs image/jxs

console.log(mimes.jxsc)
// logs image/jxsc

console.log(mimes.jxsi)
// logs image/jxsi

console.log(mimes.jxss)
// logs image/jxss

console.log(mimes.ktx)
// logs image/ktx

console.log(mimes.png)
// logs image/png

console.log(mimes.btif)
// logs image/prs.btif

console.log(mimes.pti)
// logs image/prs.pti

console.log(mimes.sgi)
// logs image/sgi

console.log(mimes.svg)
// logs image/svg+xml

console.log(mimes.svgz)
// logs image/svg+xml

console.log(mimes.t38)
// logs image/t38

console.log(mimes.tif)
// logs image/tiff

console.log(mimes.tiff)
// logs image/tiff

console.log(mimes.tfx)
// logs image/tiff-fx

console.log(mimes.psd)
// logs image/vnd.adobe.photoshop

console.log(mimes.azv)
// logs image/vnd.airzip.accelerator.azv

console.log(mimes.uvi)
// logs image/vnd.dece.graphic

console.log(mimes.uvvi)
// logs image/vnd.dece.graphic

console.log(mimes.uvg)
// logs image/vnd.dece.graphic

console.log(mimes.uvvg)
// logs image/vnd.dece.graphic

console.log(mimes.djvu)
// logs image/vnd.djvu

console.log(mimes.djv)
// logs image/vnd.djvu

console.log(mimes.sub)
// logs text/vnd.dvb.subtitle

console.log(mimes.dwg)
// logs image/vnd.dwg

console.log(mimes.dxf)
// logs image/vnd.dxf

console.log(mimes.fbs)
// logs image/vnd.fastbidsheet

console.log(mimes.fpx)
// logs image/vnd.fpx

console.log(mimes.fst)
// logs image/vnd.fst

console.log(mimes.mmr)
// logs image/vnd.fujixerox.edmics-mmr

console.log(mimes.rlc)
// logs image/vnd.fujixerox.edmics-rlc

console.log(mimes.ico)
// logs image/x-icon

console.log(mimes.dds)
// logs image/vnd.ms-dds

console.log(mimes.mdi)
// logs image/vnd.ms-modi

console.log(mimes.wdp)
// logs image/vnd.ms-photo

console.log(mimes.npx)
// logs image/vnd.net-fpx

console.log(mimes.tap)
// logs image/vnd.tencent.tap

console.log(mimes.vtf)
// logs image/vnd.valve.source.texture

console.log(mimes.wbmp)
// logs image/vnd.wap.wbmp

console.log(mimes.xif)
// logs image/vnd.xiff

console.log(mimes.pcx)
// logs image/x-pcx

console.log(mimes.webp)
// logs image/webp

console.log(mimes.wmf)
// logs image/wmf

console.log(mimes.3ds)
// logs image/x-3ds

console.log(mimes.ras)
// logs image/x-cmu-raster

console.log(mimes.cmx)
// logs image/x-cmx

console.log(mimes.fh)
// logs image/x-freehand

console.log(mimes.fhc)
// logs image/x-freehand

console.log(mimes.fh4)
// logs image/x-freehand

console.log(mimes.fh5)
// logs image/x-freehand

console.log(mimes.fh7)
// logs image/x-freehand

console.log(mimes.ico)
// logs image/x-icon

console.log(mimes.jng)
// logs image/x-jng

console.log(mimes.sid)
// logs image/x-mrsid-image

console.log(mimes.bmp)
// logs image/bmp

console.log(mimes.pcx)
// logs image/x-pcx

console.log(mimes.pic)
// logs image/x-pict

console.log(mimes.pct)
// logs image/x-pict

console.log(mimes.pnm)
// logs image/x-portable-anymap

console.log(mimes.pbm)
// logs image/x-portable-bitmap

console.log(mimes.pgm)
// logs image/x-portable-graymap

console.log(mimes.ppm)
// logs image/x-portable-pixmap

console.log(mimes.rgb)
// logs image/x-rgb

console.log(mimes.tga)
// logs image/x-tga

console.log(mimes.xbm)
// logs image/x-xbitmap

console.log(mimes.xpm)
// logs image/x-xpixmap

console.log(mimes.xwd)
// logs image/x-xwindowdump

console.log(mimes.disposition-notification)
// logs message/disposition-notification

console.log(mimes.u8msg)
// logs message/global

console.log(mimes.u8dsn)
// logs message/global-delivery-status

console.log(mimes.u8mdn)
// logs message/global-disposition-notification

console.log(mimes.u8hdr)
// logs message/global-headers

console.log(mimes.eml)
// logs message/rfc822

console.log(mimes.mime)
// logs message/rfc822

console.log(mimes.wsc)
// logs message/vnd.wfa.wsc

console.log(mimes.3mf)
// logs model/3mf

console.log(mimes.gltf)
// logs model/gltf+json

console.log(mimes.glb)
// logs model/gltf-binary

console.log(mimes.igs)
// logs model/iges

console.log(mimes.iges)
// logs model/iges

console.log(mimes.msh)
// logs model/mesh

console.log(mimes.mesh)
// logs model/mesh

console.log(mimes.silo)
// logs model/mesh

console.log(mimes.stl)
// logs model/stl

console.log(mimes.dae)
// logs model/vnd.collada+xml

console.log(mimes.dwf)
// logs model/vnd.dwf

console.log(mimes.gdl)
// logs model/vnd.gdl

console.log(mimes.gtw)
// logs model/vnd.gtw

console.log(mimes.mts)
// logs model/vnd.mts

console.log(mimes.ogex)
// logs model/vnd.opengex

console.log(mimes.x_b)
// logs model/vnd.parasolid.transmit.binary

console.log(mimes.x_t)
// logs model/vnd.parasolid.transmit.text

console.log(mimes.usdz)
// logs model/vnd.usdz+zip

console.log(mimes.bsp)
// logs model/vnd.valve.source.compiled-map

console.log(mimes.vtu)
// logs model/vnd.vtu

console.log(mimes.wrl)
// logs model/vrml

console.log(mimes.vrml)
// logs model/vrml

console.log(mimes.x3db)
// logs model/x3d+binary

console.log(mimes.x3dbz)
// logs model/x3d+binary

console.log(mimes.x3db)
// logs model/x3d+binary

console.log(mimes.x3dv)
// logs model/x3d-vrml

console.log(mimes.x3dvz)
// logs model/x3d+vrml

console.log(mimes.x3d)
// logs model/x3d+xml

console.log(mimes.x3dz)
// logs model/x3d+xml

console.log(mimes.x3dv)
// logs model/x3d-vrml

console.log(mimes.appcache)
// logs text/cache-manifest

console.log(mimes.manifest)
// logs text/cache-manifest

console.log(mimes.ics)
// logs text/calendar

console.log(mimes.ifb)
// logs text/calendar

console.log(mimes.coffee)
// logs text/coffeescript

console.log(mimes.litcoffee)
// logs text/coffeescript

console.log(mimes.css)
// logs text/css

console.log(mimes.csv)
// logs text/csv

console.log(mimes.html)
// logs text/html

console.log(mimes.htm)
// logs text/html

console.log(mimes.shtml)
// logs text/html

console.log(mimes.jade)
// logs text/jade

console.log(mimes.jsx)
// logs text/jsx

console.log(mimes.less)
// logs text/less

console.log(mimes.markdown)
// logs text/markdown

console.log(mimes.md)
// logs text/markdown

console.log(mimes.mml)
// logs text/mathml

console.log(mimes.mdx)
// logs text/mdx

console.log(mimes.n3)
// logs text/n3

console.log(mimes.txt)
// logs text/plain

console.log(mimes.text)
// logs text/plain

console.log(mimes.conf)
// logs text/plain

console.log(mimes.def)
// logs text/plain

console.log(mimes.list)
// logs text/plain

console.log(mimes.log)
// logs text/plain

console.log(mimes.in)
// logs text/plain

console.log(mimes.ini)
// logs text/plain

console.log(mimes.dsc)
// logs text/prs.lines.tag

console.log(mimes.rtx)
// logs text/richtext

console.log(mimes.rtf)
// logs text/rtf

console.log(mimes.sgml)
// logs text/sgml

console.log(mimes.sgm)
// logs text/sgml

console.log(mimes.shex)
// logs text/shex

console.log(mimes.slim)
// logs text/slim

console.log(mimes.slm)
// logs text/slim

console.log(mimes.stylus)
// logs text/stylus

console.log(mimes.styl)
// logs text/stylus

console.log(mimes.tsv)
// logs text/tab-separated-values

console.log(mimes.t)
// logs text/troff

console.log(mimes.tr)
// logs text/troff

console.log(mimes.roff)
// logs text/troff

console.log(mimes.man)
// logs text/troff

console.log(mimes.me)
// logs text/troff

console.log(mimes.ms)
// logs text/troff

console.log(mimes.ttl)
// logs text/turtle

console.log(mimes.uri)
// logs text/uri-list

console.log(mimes.uris)
// logs text/uri-list

console.log(mimes.urls)
// logs text/uri-list

console.log(mimes.vcard)
// logs text/vcard

console.log(mimes.curl)
// logs text/vnd.curl

console.log(mimes.dcurl)
// logs text/vnd.curl.dcurl

console.log(mimes.mcurl)
// logs text/vnd.curl.mcurl

console.log(mimes.scurl)
// logs text/vnd.curl.scurl

console.log(mimes.sub)
// logs text/vnd.dvb.subtitle

console.log(mimes.fly)
// logs text/vnd.fly

console.log(mimes.flx)
// logs text/vnd.fmi.flexstor

console.log(mimes.gv)
// logs text/vnd.graphviz

console.log(mimes.3dml)
// logs text/vnd.in3d.3dml

console.log(mimes.spot)
// logs text/vnd.in3d.spot

console.log(mimes.jad)
// logs text/vnd.sun.j2me.app-descriptor

console.log(mimes.wml)
// logs text/vnd.wap.wml

console.log(mimes.wmls)
// logs text/vnd.wap.wmlscript

console.log(mimes.vtt)
// logs text/vtt

console.log(mimes.s)
// logs text/x-asm

console.log(mimes.asm)
// logs text/x-asm

console.log(mimes.c)
// logs text/x-c

console.log(mimes.cc)
// logs text/x-c

console.log(mimes.cxx)
// logs text/x-c

console.log(mimes.cpp)
// logs text/x-c

console.log(mimes.h)
// logs text/x-c

console.log(mimes.hh)
// logs text/x-c

console.log(mimes.dic)
// logs text/x-c

console.log(mimes.htc)
// logs text/x-component

console.log(mimes.f)
// logs text/x-fortran

console.log(mimes.for)
// logs text/x-fortran

console.log(mimes.f77)
// logs text/x-fortran

console.log(mimes.f90)
// logs text/x-fortran

console.log(mimes.hbs)
// logs text/x-handlebars-template

console.log(mimes.java)
// logs text/x-java-source

console.log(mimes.lua)
// logs text/x-lua

console.log(mimes.mkd)
// logs text/x-markdown

console.log(mimes.nfo)
// logs text/x-nfo

console.log(mimes.opml)
// logs text/x-opml

console.log(mimes.org)
// logs text/x-org

console.log(mimes.p)
// logs text/x-pascal

console.log(mimes.pas)
// logs text/x-pascal

console.log(mimes.pde)
// logs text/x-processing

console.log(mimes.sass)
// logs text/x-sass

console.log(mimes.scss)
// logs text/x-scss

console.log(mimes.etx)
// logs text/x-setext

console.log(mimes.sfv)
// logs text/x-sfv

console.log(mimes.ymp)
// logs text/x-suse-ymp

console.log(mimes.uu)
// logs text/x-uuencode

console.log(mimes.vcs)
// logs text/x-vcalendar

console.log(mimes.vcf)
// logs text/x-vcard

console.log(mimes.xml)
// logs text/xml

console.log(mimes.yaml)
// logs text/yaml

console.log(mimes.yml)
// logs text/yaml

console.log(mimes.3gp)
// logs video/3gpp

console.log(mimes.3gpp)
// logs video/3gpp

console.log(mimes.3g2)
// logs video/3gpp2

console.log(mimes.h261)
// logs video/h261

console.log(mimes.h263)
// logs video/h263

console.log(mimes.h264)
// logs video/h264

console.log(mimes.jpgv)
// logs video/jpeg

console.log(mimes.jpm)
// logs image/jpm

console.log(mimes.jpgm)
// logs video/jpm

console.log(mimes.mj2)
// logs video/mj2

console.log(mimes.mjp2)
// logs video/mj2

console.log(mimes.ts)
// logs video/mp2t

console.log(mimes.mp4)
// logs video/mp4

console.log(mimes.mp4v)
// logs video/mp4

console.log(mimes.mpg4)
// logs video/mp4

console.log(mimes.mpeg)
// logs video/mpeg

console.log(mimes.mpg)
// logs video/mpeg

console.log(mimes.mpe)
// logs video/mpeg

console.log(mimes.m1v)
// logs video/mpeg

console.log(mimes.m2v)
// logs video/mpeg

console.log(mimes.ogv)
// logs video/ogg

console.log(mimes.qt)
// logs video/quicktime

console.log(mimes.mov)
// logs video/quicktime

console.log(mimes.uvh)
// logs video/vnd.dece.hd

console.log(mimes.uvvh)
// logs video/vnd.dece.hd

console.log(mimes.uvm)
// logs video/vnd.dece.mobile

console.log(mimes.uvvm)
// logs video/vnd.dece.mobile

console.log(mimes.uvp)
// logs video/vnd.dece.pd

console.log(mimes.uvvp)
// logs video/vnd.dece.pd

console.log(mimes.uvs)
// logs video/vnd.dece.sd

console.log(mimes.uvvs)
// logs video/vnd.dece.sd

console.log(mimes.uvv)
// logs video/vnd.dece.video

console.log(mimes.uvvv)
// logs video/vnd.dece.video

console.log(mimes.dvb)
// logs video/vnd.dvb.file

console.log(mimes.fvt)
// logs video/vnd.fvt

console.log(mimes.mxu)
// logs video/vnd.mpegurl

console.log(mimes.m4u)
// logs video/vnd.mpegurl

console.log(mimes.pyv)
// logs video/vnd.ms-playready.media.pyv

console.log(mimes.uvu)
// logs video/vnd.uvvu.mp4

console.log(mimes.uvvu)
// logs video/vnd.uvvu.mp4

console.log(mimes.viv)
// logs video/vnd.vivo

console.log(mimes.webm)
// logs video/webm

console.log(mimes.f4v)
// logs video/x-f4v

console.log(mimes.fli)
// logs video/x-fli

console.log(mimes.flv)
// logs video/x-flv

console.log(mimes.m4v)
// logs video/x-m4v

console.log(mimes.mkv)
// logs video/x-matroska

console.log(mimes.mk3d)
// logs video/x-matroska

console.log(mimes.mks)
// logs video/x-matroska

console.log(mimes.mng)
// logs video/x-mng

console.log(mimes.asf)
// logs video/x-ms-asf

console.log(mimes.asx)
// logs video/x-ms-asf

console.log(mimes.vob)
// logs video/x-ms-vob

console.log(mimes.wm)
// logs video/x-ms-wm

console.log(mimes.wmv)
// logs video/x-ms-wmv

console.log(mimes.wmx)
// logs video/x-ms-wmx

console.log(mimes.wvx)
// logs video/x-ms-wvx

console.log(mimes.avi)
// logs video/x-msvideo

console.log(mimes.movie)
// logs video/x-sgi-movie

console.log(mimes.smv)
// logs video/x-smv

console.log(mimes.ice)
// logs x-conference/x-cooltalk

```

### changelog

#### 0.0.1
first publish

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
