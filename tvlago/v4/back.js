function runbackend() {
    needupdate = checkupdate();
    if (needupdate == 1) {
        const mainui = document.getElementById("mainui").innerHTML = '<h1>An update is required</h1><h2>Press update to download the newest version</h2><a href=""><button>Update</button></a>'
    }
    if (needupdate == 0) {
        const mainui = document.getElementById("mainui").innerHTML = '';
        loadchannels();
    }
}

function checkupdate() {
    needupdate = 0;
    return needupdate;
}
function loadchannels() {
    let channeldb = [
        ["https://epg.provider.plex.tv/library/parts/5e20b730f2f8d5003d739db7-62c4a65788737d6edc1a3626/variant.m3u8?x-plex-token=AiCVh-E1uDGxisPjxfBL&x-plex-advertising-identifier=&x-plex-advertising-donottrack=1&x-plex-drm=&x-plex-device-screen-resolution=&x-plex-device-vendor=&x-plex-version=&x-plex-session-id=&x-plex-playback-session-id=&x-plex-playback-id=&x-plex-provider-streaming-start=1732321723&url=75a3186983ddc9b71509f6415dbb60be-0a1860ad387899ac6639d36d8a7e39dbe5a8ed3dd2f34eec4c9e8a914ffc7615c9b94b5f74a7a3f3833ae85f70b19f1f365f0ab387adf68bc44a9b2c75b9c20bac653780dcdded6e25e11b4f5bf92ebc25c93c528767413f5f15108fb89fd029a4793588c7bff5301b740e503b29de1e8091d9e390f57b1882bf86a7f79a447d9a1de53882662e9ed43b132198efbddecb9b62b9f67b90edd3d892121106a7dcfbfdc04914ae5f50e8dfe2836a0132a6410a9bf8826f3760290c2486dd42593084980b8b37663178061d64c7fbb4ac1f734f86cf3750c1f272870d9162511831a1082337a737652843bb5251eefbf983c3dcc3352954da404448e35c0d8f066009bbfdecca8aae2ce28911511f981e54c83d29b102b64558b159c1683118aaeba251dbfe2be84dea0700981c03219e6a3c64423e0ca0fc69526b6739a7aed043331bf352b52d98065e0ddf388f02fea6bd37ad3b13165ad05e3bd9942122b19f918e7ffdc7d52f3ea91cf292b8b7d38fe460edbf9199125e27555ad804a13652292fee1027fd22bc79d03bedf724e1aaf7ae58eb3b069bc8f865bca2109aaa21b5d0ea8cdf0a9b81999e93f52053ca334575893434728b4b5f48ccac371da5cd11e4240251fb24f2aad5eb8a6b88517c78dea2446c7a0ef3a8eb4c29d765edf5e08a1780b25268b75f6a0362291fa3782cd68b74e55b76b539dbe20985976ac2f6d3912e35cb404339cb72048d81cb429a77043b46e9090e48aa9ba5c92d830e2783dc8c0c5fbbaa775c9d5d6f53616b7076bbef75b0930e2ce9d0ec3d7a0dd68592c9378a21e500f1d918ac8604a8abc51f4f27e5600303833371b8438be18b4f6bc8a2fdcecd6fa1e9514f9303db66e2f20be0de7b28478e3c1bf7fbe7bb67fa4d8891b7682b0723eb57d91c98ec970711c054ffd1629b61d15bb588444a32dab4a018d766e2acd90b2efccfbcaa4c493eff340d24aa77c7e1ee430a070b4249e8aceaee2e7c4520a3097a23c1287a23bf7a5f01773d8e94eed30a8777f253795b6f23ca7a0b7b73689621b2f7ac559e288e7cfd96209c7e9d45a6ac58f9f4e1171d21b1ba7e4b2c10821ec21336268dfcf07d3a130546c10107206b16ef91de416362c2b0e293a77b2e697612d5f7ae11ebffc9e5f5e8ba0c5aa3d2fad053fe9753371934ac6c5fb88505e40c1832ff4dc1e49c8195a7090d26adae600703025ea3e355cf91218eb824629d5f8df6d8388043b740b243a751220a18b9c198d71859fb7cf7e89e50f5a3857d3c5838be1e1d2ff247c387e9e16c60c0553bfcd946064906e53ee5f6cc902eb943b9bf50d27895263a3fd533e11cffda385eb599b6383004b1d6bc59910e49256508f3698a5671db176ed33e86cef2a4c9b0f69e7616d087e0117bb3b3f415cddb300efdf478f4e357e76c561ac5e918329d35621f255dca9b21af387583258f27591af98f8591700e93eb11484f2795a0122aefa2413c6a0c6ac0b997c7f74baf7469088071a75eb49ed0e1db88c2bdf2efa22921be5712e57ad4258d0cf2b78ffb2abf8e955e106c1cf5a2a52ea1197d0518c4b6b9e0e9b045cd07b0f79550cc9c7f579e4510a35537ca63ff2e7bd74c46656980113b5e89b0d9090996862c313b6b0e2e39ea4cbf5e9e51c770e55aaba80578cadeb1360e7ce1497a06ec67001a85c5cac192d416bc5e38194e1e0bbdebb16a12bc4843cc9857fb908b5c28df54b307448adb4dec41ecfcecd9a76c1cc837e7dea72052ecd64484c08ec45e4fee8f0f80defad3a33891ce22b5fa47ef356b5b90c214d75ac1c353ca11f94e7cdf69b82e7d076b77eb6dc2c82afd6b57ffd5c5c50a4ba96ec4dcee6a0e19f2ebc6f04e851d0955a36ebcfbf8ab1529bcc4ed9d16bcfed5af2aa88d0b7f6f7138524b18cb461ca93a005b5180a469db36999adf0d8ec2fa35904f9ad3756ce28797ba9c6c70e8bbd97529697da3557983a52f7f46bdc3ebaf658e2571d495292b565afd02125a0521fa76ca74f9bd674e1e9a04cef975f7c863d23305cadfcffed5e0c75fff5fecc38c8f383fb6b5517ebcbccc5158d56c8a2542c11a73a92633691afec42229e6a7f4ed9bc22ffad4cd58f9720d4ebda13afddf1557d153a91b4338ca22509a791851fad099c4771868c5b3c5db78f36fc5ff9c02a509da34e2095c8305440991cd054de43de8f0565ca527854e4ea59d7a9938015fe2a98e4eb42dfdd3d92c81a95f7132b95ddac8ae5824ab3ffef6815d12bb60135f0d1cced81e3b8d2b7ee68635343c4d9ad298b1d9d94f8c1b9ac7fac413ffb04cfb6d556631fcc84dcd86ef2f2fa9204d9dd59add10e6f971fd0f458f4addeefa3cbcbe39149b26b41589062e56bf60f6761483a9dc73682a372ea3a780b46b4a82ad74e3bee90419be5871c645c1f6759a581bf6c25599cf41a0859859599c9595d94fd2401a3d48b1254beb99287a9cb2ae022b77", "https://mrdannyarmstrong.github.io/tvlago/v3/banners/thehill.svg"],
        ["legacy/", "https://mrdannyarmstrong.github.io/tvlago/v4/banners/legacy.svg"],
    ];
    for (var i = 0; i < channeldb.length; i++) {  
        if (channeldb[i][0] == "NULL") {
            const mainui = document.getElementById("mainui").innerHTML += '<div class="channel"></div>';
        }
        else {
            const mainui = document.getElementById("mainui").innerHTML += '<div class="channel"><a href="'  + channeldb[i][0] +  '"><img src="'  + channeldb[i][1] +  '" class="logo" onmouseover="channeru()"></a></div>';
        }
    }
}
