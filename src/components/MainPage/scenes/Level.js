// You can write more code here

/* START OF COMPILED CODE */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// patch_grass_foliageleft
		const patch_grass_foliageleft = this.add.image(149, 515, "patch-grass-foliageleft");
		patch_grass_foliageleft.scaleX = 0.5;
		patch_grass_foliageleft.scaleY = 0.5;

		// patch_grass_foliageright
		const patch_grass_foliageright = this.add.image(284, 523, "patch-grass-foliageright");
		patch_grass_foliageright.scaleX = 0.5;
		patch_grass_foliageright.scaleY = 0.5;

		// patch_grassleft
		const patch_grassleft = this.add.image(282, 589, "patch-grassleft");
		patch_grassleft.scaleX = 0.5;
		patch_grassleft.scaleY = 0.5;

		// cargo_container_a_right
		const cargo_container_a_right = this.add.image(292, 512, "cargo-container-a-right");
		cargo_container_a_right.scaleX = 0.15;
		cargo_container_a_right.scaleY = 0.15;

		// ship_largeright
		const ship_largeright = this.add.image(123, 594, "ship-largeright");
		ship_largeright.scaleX = 0.3;
		ship_largeright.scaleY = 0.3;

		// tile_72
		const tile_72 = this.add.image(605, -1017, "tile1");
		tile_72.scaleX = 0.18;
		tile_72.scaleY = 0.18;

		// woodbridge_5
		const woodbridge_5 = this.add.image(1297, -1000, "woodbridge");
		woodbridge_5.scaleX = 0.2;
		woodbridge_5.scaleY = 0.2;
		woodbridge_5.flipX = true;

		// woodbridge_4
		const woodbridge_4 = this.add.image(647, -973, "woodbridge");
		woodbridge_4.scaleX = 0.2;
		woodbridge_4.scaleY = 0.2;

		// tile_71
		const tile_71 = this.add.image(1251, -981, "tile9");
		tile_71.scaleX = 0.18;
		tile_71.scaleY = 0.18;

		// tile_70
		const tile_70 = this.add.image(1208, -959, "tile5");
		tile_70.scaleX = 0.2;
		tile_70.scaleY = 0.2;

		// tile_69
		const tile_69 = this.add.image(696, -946, "tile3");
		tile_69.scaleX = 0.2;
		tile_69.scaleY = 0.2;

		// tile_68
		const tile_68 = this.add.image(1159, -940, "tile1");
		tile_68.scaleX = 0.18;
		tile_68.scaleY = 0.18;

		// woodbridge_3
		const woodbridge_3 = this.add.image(1119, -898, "woodbridge");
		woodbridge_3.scaleX = 0.2;
		woodbridge_3.scaleY = 0.2;
		woodbridge_3.flipX = true;

		// tile_67
		const tile_67 = this.add.image(1073, -880, "tile9");
		tile_67.scaleX = 0.18;
		tile_67.scaleY = 0.18;

		// tile_66
		const tile_66 = this.add.image(1023, -845, "tile3");
		tile_66.scaleX = 0.2;
		tile_66.scaleY = 0.2;

		// tile_63
		const tile_63 = this.add.image(747, -916, "tile3");
		tile_63.scaleX = 0.2;
		tile_63.scaleY = 0.2;

		// woodbridge_2
		const woodbridge_2 = this.add.image(793, -895, "woodbridge");
		woodbridge_2.scaleX = 0.2;
		woodbridge_2.scaleY = 0.2;

		// tile_62
		const tile_62 = this.add.image(839, -864, "tile9");
		tile_62.scaleX = 0.18;
		tile_62.scaleY = 0.18;

		// tile_61
		const tile_61 = this.add.image(889, -841, "tile5");
		tile_61.scaleX = 0.2;
		tile_61.scaleY = 0.2;

		// tile_65
		const tile_65 = this.add.image(980, -830, "tile5");
		tile_65.scaleX = 0.2;
		tile_65.scaleY = 0.2;

		// tile_56
		const tile_56 = this.add.image(931, -810, "tile1");
		tile_56.scaleX = 0.18;
		tile_56.scaleY = 0.18;

		// tile_57
		const tile_57 = this.add.image(888, -769, "tile3");
		tile_57.scaleX = 0.2;
		tile_57.scaleY = 0.2;

		// tile_55
		const tile_55 = this.add.image(841, -741, "tile3");
		tile_55.scaleX = 0.2;
		tile_55.scaleY = 0.2;

		// tile_54
		const tile_54 = this.add.image(798, -726, "tile5");
		tile_54.scaleX = 0.2;
		tile_54.scaleY = 0.2;

		// tile_50
		const tile_50 = this.add.image(605, -772, "tile3");
		tile_50.scaleX = 0.2;
		tile_50.scaleY = 0.2;

		// tile_48
		const tile_48 = this.add.image(559, -751, "tile9");
		tile_48.scaleX = 0.18;
		tile_48.scaleY = 0.18;

		// tile_49
		const tile_49 = this.add.image(511, -722, "tile8");
		tile_49.scaleX = 0.18;
		tile_49.scaleY = 0.18;

		// tile_47
		const tile_47 = this.add.image(471, -702, "tile5");
		tile_47.scaleX = 0.2;
		tile_47.scaleY = 0.2;

		// structure_platformright
		const structure_platformright = this.add.image(425, -671, "structure-platformright");
		structure_platformright.scaleX = 0.1;
		structure_platformright.scaleY = 0.1;

		// tile_46
		const tile_46 = this.add.image(382, -653, "tile1");
		tile_46.scaleX = 0.18;
		tile_46.scaleY = 0.18;

		// tile_45
		const tile_45 = this.add.image(425, -610, "tile3");
		tile_45.scaleX = 0.2;
		tile_45.scaleY = 0.2;

		// structure_platform_dockright
		const structure_platform_dockright = this.add.image(469, -592, "structure-platform-dockright");
		structure_platform_dockright.scaleX = 0.1;
		structure_platform_dockright.scaleY = 0.1;

		// tile_44
		const tile_44 = this.add.image(514, -569, "tile5");
		tile_44.scaleX = 0.2;
		tile_44.scaleY = 0.2;

		// tile_43
		const tile_43 = this.add.image(558, -527, "tile3");
		tile_43.scaleX = 0.2;
		tile_43.scaleY = 0.2;

		// tile_42
		const tile_42 = this.add.image(690, -567, "tile4");
		tile_42.scaleX = 0.2;
		tile_42.scaleY = 0.2;

		// structure_platform_dock_smallleft
		const structure_platform_dock_smallleft = this.add.image(648, -542, "structure-platform-dock-smallleft");
		structure_platform_dock_smallleft.scaleX = 0.1;
		structure_platform_dock_smallleft.scaleY = 0.1;

		// tile2
		const tile2 = this.add.image(403, 349, "tile2");
		tile2.scaleX = 0.2;
		tile2.scaleY = 0.2;

		// tile_51
		const tile_51 = this.add.image(654, -751, "tile4");
		tile_51.scaleX = 0.2;
		tile_51.scaleY = 0.2;

		// tile_41
		const tile_41 = this.add.image(606, -516, "tile2");
		tile_41.scaleX = 0.18;
		tile_41.scaleY = 0.18;

		// tile_40
		const tile_40 = this.add.image(651, -487, "tile5");
		tile_40.scaleX = 0.2;
		tile_40.scaleY = 0.2;

		// tile_39
		const tile_39 = this.add.image(694, -453, "tile9");
		tile_39.scaleX = 0.18;
		tile_39.scaleY = 0.18;

		// tile_38
		const tile_38 = this.add.image(741, -415, "tile3");
		tile_38.scaleX = 0.2;
		tile_38.scaleY = 0.2;

		// tile_37
		const tile_37 = this.add.image(790, -393, "tile4");
		tile_37.scaleX = 0.2;
		tile_37.scaleY = 0.2;

		// tile_33
		const tile_33 = this.add.image(887, -395, "tile5");
		tile_33.scaleX = 0.2;
		tile_33.scaleY = 0.2;

		// tile_32
		const tile_32 = this.add.image(837, -355, "tile3");
		tile_32.scaleX = 0.2;
		tile_32.scaleY = 0.2;

		// tile_31
		const tile_31 = this.add.image(790, -332, "tile8");
		tile_31.scaleX = 0.18;
		tile_31.scaleY = 0.18;

		// structure_platformleft
		const structure_platformleft = this.add.image(646, -362, "structure-platformleft");
		structure_platformleft.scaleX = 0.1;
		structure_platformleft.scaleY = 0.1;

		// tile_60
		const tile_60 = this.add.image(693, -333, "tile10");
		tile_60.scaleX = 0.2;
		tile_60.scaleY = 0.2;

		// tile_30
		const tile_30 = this.add.image(741, -306, "tile4");
		tile_30.scaleX = 0.2;
		tile_30.scaleY = 0.2;

		// woodbridge_1
		const woodbridge_1 = this.add.image(698, -278, "woodbridge");
		woodbridge_1.scaleX = 0.2;
		woodbridge_1.scaleY = 0.2;
		woodbridge_1.flipX = true;

		// wood_1
		const wood_1 = this.add.image(342, -330, "wood");
		wood_1.scaleX = 0.2;
		wood_1.scaleY = 0.2;

		// tile_59
		const tile_59 = this.add.image(385, -307, "tile2");
		tile_59.scaleX = 0.18;
		tile_59.scaleY = 0.18;

		// tile_58
		const tile_58 = this.add.image(430, -272, "tile8");
		tile_58.scaleX = 0.18;
		tile_58.scaleY = 0.18;

		// structure_platform_dockright_1
		const structure_platform_dockright_1 = this.add.image(474, -249, "structure-platform-dockright");
		structure_platform_dockright_1.scaleX = 0.1;
		structure_platform_dockright_1.scaleY = 0.1;

		// tile_29
		const tile_29 = this.add.image(515, -228, "tile6");
		tile_29.scaleX = 0.18;
		tile_29.scaleY = 0.18;

		// tile_28
		const tile_28 = this.add.image(657, -259, "tile5");
		tile_28.scaleX = 0.2;
		tile_28.scaleY = 0.2;

		// tile_27
		const tile_27 = this.add.image(608, -223, "tile9");
		tile_27.scaleX = 0.18;
		tile_27.scaleY = 0.18;

		// tile_26
		const tile_26 = this.add.image(562, -188, "tile3");
		tile_26.scaleX = 0.2;
		tile_26.scaleY = 0.2;

		// tile_25
		const tile_25 = this.add.image(515, -164, "tile10");
		tile_25.scaleX = 0.2;
		tile_25.scaleY = 0.2;

		// tile_24
		const tile_24 = this.add.image(465, -135, "tile8");
		tile_24.scaleX = 0.18;
		tile_24.scaleY = 0.18;

		// tile_23
		const tile_23 = this.add.image(424, -113, "tile2");
		tile_23.scaleX = 0.18;
		tile_23.scaleY = 0.18;

		// tile_22
		const tile_22 = this.add.image(470, -80, "tile4");
		tile_22.scaleX = 0.2;
		tile_22.scaleY = 0.2;

		// tile_21
		const tile_21 = this.add.image(516, -46, "tile9");
		tile_21.scaleX = 0.18;
		tile_21.scaleY = 0.18;

		// tile_20
		const tile_20 = this.add.image(563, -11, "tile3");
		tile_20.scaleX = 0.2;
		tile_20.scaleY = 0.2;

		// tile_18
		const tile_18 = this.add.image(612, 5, "tile5");
		tile_18.scaleX = 0.2;
		tile_18.scaleY = 0.2;

		// woodbridge
		const woodbridge = this.add.image(652, 41, "woodbridge");
		woodbridge.scaleX = 0.2;
		woodbridge.scaleY = 0.2;

		// tile_19
		const tile_19 = this.add.image(745, 33, "tile6");
		tile_19.scaleX = 0.18;
		tile_19.scaleY = 0.18;

		// tile_17
		const tile_17 = this.add.image(699, 69, "tile8");
		tile_17.scaleX = 0.18;
		tile_17.scaleY = 0.18;

		// tile_16
		const tile_16 = this.add.image(745, 98, "tile9");
		tile_16.scaleX = 0.18;
		tile_16.scaleY = 0.18;

		// tile1
		const tile1 = this.add.image(833, 88, "tile1");
		tile1.scaleX = 0.18;
		tile1.scaleY = 0.18;

		// tile_15
		const tile_15 = this.add.image(791, 133, "tile3");
		tile_15.scaleX = 0.2;
		tile_15.scaleY = 0.2;

		// tile_14
		const tile_14 = this.add.image(840, 149, "tile5");
		tile_14.scaleX = 0.2;
		tile_14.scaleY = 0.2;

		// tile_13
		const tile_13 = this.add.image(885, 183, "tile2");
		tile_13.scaleX = 0.18;
		tile_13.scaleY = 0.18;

		// tile_12
		const tile_12 = this.add.image(837, 224, "tile3");
		tile_12.scaleX = 0.2;
		tile_12.scaleY = 0.2;

		// tile_9
		const tile_9 = this.add.image(789, 244, "tile4");
		tile_9.scaleX = 0.2;
		tile_9.scaleY = 0.2;

		// tile_7
		const tile_7 = this.add.image(740, 283, "tile3");
		tile_7.scaleX = 0.2;
		tile_7.scaleY = 0.2;

		// tile_5
		const tile_5 = this.add.image(693, 305, "tile9");
		tile_5.scaleX = 0.18;
		tile_5.scaleY = 0.18;

		// tile9
		const tile9 = this.add.image(447, 391, "tile9");
		tile9.scaleX = 0.18;
		tile9.scaleY = 0.18;

		// tile7
		const tile7 = this.add.image(555, 267, "tile7");
		tile7.scaleX = 0.18;
		tile7.scaleY = 0.18;

		// tile_8
		const tile_8 = this.add.image(602, 295, "tile5");
		tile_8.scaleX = 0.2;
		tile_8.scaleY = 0.2;

		// tile_3
		const tile_3 = this.add.image(644, 338, "tile3");
		tile_3.scaleX = 0.2;
		tile_3.scaleY = 0.2;

		// tile_2
		const tile_2 = this.add.image(595, 369, "tile3");
		tile_2.scaleX = 0.2;
		tile_2.scaleY = 0.2;

		// tile_4
		const tile_4 = this.add.image(544, 394, "tile9");
		tile_4.scaleX = 0.2;
		tile_4.scaleY = 0.2;

		// tile_1
		const tile_1 = this.add.image(494, 429, "tile3");
		tile_1.scaleX = 0.2;
		tile_1.scaleY = 0.2;

		// palm_bendright_1
		const palm_bendright_1 = this.add.image(397, 309, "palm-bendright");
		palm_bendright_1.scaleX = 0.2;
		palm_bendright_1.scaleY = 0.2;
		palm_bendright_1.flipX = true;

		// palm_bendright
		const palm_bendright = this.add.image(366, 319, "palm-bendright");
		palm_bendright.scaleX = 0.2;
		palm_bendright.scaleY = 0.2;

		// tile10
		const tile10 = this.add.image(448, 455, "tile10");
		tile10.scaleX = 0.2;
		tile10.scaleY = 0.2;

		// tile5
		const tile5 = this.add.image(597, 421, "tile5");
		tile5.scaleX = 0.22;
		tile5.scaleY = 0.22;

		// tile3
		const tile3 = this.add.image(493, 498, "tile3");
		tile3.scaleX = 0.2;
		tile3.scaleY = 0.2;

		// tile
		const tile = this.add.image(444, 517, "tile8");
		tile.scaleX = 0.18;
		tile.scaleY = 0.18;

		// flag_pirateright
		const flag_pirateright = this.add.image(461, 458, "flag-pirateright");
		flag_pirateright.scaleX = 0.2;
		flag_pirateright.scaleY = 0.2;

		// tile4
		const tile4 = this.add.image(542, 516, "tile4");
		tile4.scaleX = 0.2;
		tile4.scaleY = 0.2;

		// tile13
		const tile13 = this.add.image(593, 560, "tile13");
		tile13.scaleX = 0.2;
		tile13.scaleY = 0.2;

		// tile_6
		const tile_6 = this.add.image(704, 548, "tile2");
		tile_6.scaleX = 0.2;
		tile_6.scaleY = 0.2;

		// tile8
		const tile8 = this.add.image(649, 590, "tile8");
		tile8.scaleX = 0.2;
		tile8.scaleY = 0.2;

		// num1
		const num1 = this.add.image(648, 572, "num1");
		num1.scaleX = 0.15;
		num1.scaleY = 0.15;
    num1.setInteractive();
    num1.on('pointerdown', () => {
		const event = new CustomEvent('terminal-trigger', {
			detail: { terminalId: num1.texture.key }
		});
		window.dispatchEvent(event);
    });

		// tile6
		const tile6 = this.add.image(591, 622, "tile6");
		tile6.scaleX = 0.2;
		tile6.scaleY = 0.2;

		// chest_left
		const chest_left = this.add.image(593, 594, "chest-left");
		chest_left.scaleX = 0.1;
		chest_left.scaleY = 0.1;

		// tower_base_doorleft
		const tower_base_doorleft = this.add.image(114, 483, "tower-base-doorleft");
		tower_base_doorleft.scaleX = 0.15;
		tower_base_doorleft.scaleY = 0.15;

		// tower_complete_largeleft
		const tower_complete_largeleft = this.add.image(112, 371, "tower-complete-largeleft");
		tower_complete_largeleft.scaleX = 0.4;
		tower_complete_largeleft.scaleY = 0.4;

		// rocks_aright
		const rocks_aright = this.add.image(230, 538, "rocks-aright");
		rocks_aright.scaleX = 0.15;
		rocks_aright.scaleY = 0.15;

		// patch_grass_foliageleft_1
		const patch_grass_foliageleft_1 = this.add.image(1120, 390, "patch-grass-foliageleft");
		patch_grass_foliageleft_1.scaleX = 0.5;
		patch_grass_foliageleft_1.scaleY = 0.5;

		// grass_plantleft
		const grass_plantleft = this.add.image(1061, 396, "grass-plantleft");
		grass_plantleft.scaleX = 0.1;
		grass_plantleft.scaleY = 0.1;

		// cannonright
		const cannonright = this.add.image(702, 528, "cannonright");
		cannonright.scaleX = 0.1;
		cannonright.scaleY = 0.1;

		// cargo_container_b_left
		const cargo_container_b_left = this.add.image(1123, 391, "cargo-container-b-left");
		cargo_container_b_left.scaleX = 0.15;
		cargo_container_b_left.scaleY = 0.15;

		// ship_pirate_largeleft
		const ship_pirate_largeleft = this.add.image(1037, 262, "ship-pirate-largeleft");
		ship_pirate_largeleft.scaleX = 0.3;
		ship_pirate_largeleft.scaleY = 0.3;

		// palm_bendleft
		const palm_bendleft = this.add.image(1056, 328, "palm-bendleft");
		palm_bendleft.scaleX = 0.2;
		palm_bendleft.scaleY = 0.2;

		// tile_10
		const tile_10 = this.add.image(689, 362, "tile8");
		tile_10.scaleX = 0.18;
		tile_10.scaleY = 0.18;

		// tile_11
		const tile_11 = this.add.image(740, 376, "tile2");
		tile_11.scaleX = 0.2;
		tile_11.scaleY = 0.2;

		// chest_right
		const chest_right = this.add.image(738, 355, "chest-right");
		chest_right.scaleX = 0.1;
		chest_right.scaleY = 0.1;

		// flag_pirateleft
		const flag_pirateleft = this.add.image(571, 220, "flag-pirateleft");
		flag_pirateleft.scaleX = 0.2;
		flag_pirateleft.scaleY = 0.2;

		// cannonrightleft
		const cannonrightleft = this.add.image(832, 70, "cannonrightleft");
		cannonrightleft.scaleX = 0.1;
		cannonrightleft.scaleY = 0.1;

		// arrow_upright
		const arrow_upright = this.add.image(646, 321, "arrow-upright");
		arrow_upright.scaleX = 0.1;
		arrow_upright.scaleY = 0.1;

		// patch_grassright_1
		const patch_grassright_1 = this.add.image(92, 10, "patch-grassright");
		patch_grassright_1.scaleX = 1.5;
		patch_grassright_1.scaleY = 1.5;
		patch_grassright_1.flipX = true;

		// rocks_aleft
		const rocks_aleft = this.add.image(42, 10, "rocks-aleft");
		rocks_aleft.scaleX = 0.2;
		rocks_aleft.scaleY = 0.2;

		// tower_complete_smallright
		const tower_complete_smallright = this.add.image(152, -75, "tower-complete-smallright");
		tower_complete_smallright.scaleX = 0.3;
		tower_complete_smallright.scaleY = 0.3;

		// num2
		const num2 = this.add.image(596, 349, "num2");
		num2.scaleX = 0.15;
		num2.scaleY = 0.15;
    num2.setInteractive();
    num2.on('pointerdown', () => {
      const event = new CustomEvent('terminal-trigger', {
        detail: { terminalId: 'terminal1' }
      });
      window.dispatchEvent(event);
    });

		// num3
		const num3 = this.add.image(883, 166, "num3");
		num3.scaleX = 0.15;
		num3.scaleY = 0.15;
    num3.setInteractive();
    num3.on('pointerdown', () => {
      const event = new CustomEvent('terminal-trigger', {
        detail: { terminalId: 'terminal1' }
      });
      window.dispatchEvent(event);
    });

		// barrel_left
		const barrel_left = this.add.image(740, 257, "barrel-left");
		barrel_left.scaleX = 0.1;
		barrel_left.scaleY = 0.1;

		// grass_plantright
		const grass_plantright = this.add.image(386, 337, "grass-plantright");
		grass_plantright.scaleX = 0.1;
		grass_plantright.scaleY = 0.1;

		// gold
		const gold = this.add.image(590, 526, "gold");
		gold.scaleX = 0.15;
		gold.scaleY = 0.15;

		// wood
		const wood = this.add.image(446, 380, "wood2");
		wood.scaleX = 0.09;
		wood.scaleY = 0.09;

		// skull
		const skull = this.add.image(687, 353, "skull");
		skull.scaleX = 0.08;
		skull.scaleY = 0.08;

		// cargo_container_c_left
		const cargo_container_c_left = this.add.image(700, 53, "cargo-container-c-left");
		cargo_container_c_left.scaleX = 0.1;
		cargo_container_c_left.scaleY = 0.1;

		// palm_detailed_straightright
		const palm_detailed_straightright = this.add.image(525, 489, "palm-detailed-straightright");
		palm_detailed_straightright.scaleX = 0.2;
		palm_detailed_straightright.scaleY = 0.2;

		// grass_plantleft_1
		const grass_plantleft_1 = this.add.image(531, 510, "grass-plantleft");
		grass_plantleft_1.scaleX = 0.1;
		grass_plantleft_1.scaleY = 0.1;

		// num4
		const num4 = this.add.image(562, -33, "num4");
		num4.scaleX = 0.15;
		num4.scaleY = 0.15;
    num4.setInteractive();
    num4.on('pointerdown', () => {
      const event = new CustomEvent('terminal-trigger', {
        detail: { terminalId: 'terminal1' }
      });
      window.dispatchEvent(event);
    });

		// cannonright_1
		const cannonright_1 = this.add.image(421, -132, "cannonright");
		cannonright_1.scaleX = 0.1;
		cannonright_1.scaleY = 0.1;

		// flag_pirateright_1
		const flag_pirateright_1 = this.add.image(166, -186, "flag-pirateright");
		flag_pirateright_1.scaleX = 0.2;
		flag_pirateright_1.scaleY = 0.2;

		// patch_grassright_2
		this.add.image(1205, -162, "patch-grassright");

		// patch_grassleft_1
		this.add.image(1116, -103, "patch-grassleft");

		// cargo_container_a_right_1
		const cargo_container_a_right_1 = this.add.image(1125, -161, "cargo-container-a-right");
		cargo_container_a_right_1.scaleX = 0.2;
		cargo_container_a_right_1.scaleY = 0.2;

		// patch_grassright
		const patch_grassright = this.add.image(1282, -4, "patch-grassright");
		patch_grassright.scaleX = 1.5;
		patch_grassright.scaleY = 1.5;

		// tower_complete_smallleft
		const tower_complete_smallleft = this.add.image(1194, -100, "tower-complete-smallleft");
		tower_complete_smallleft.scaleX = 0.3;
		tower_complete_smallleft.scaleY = 0.3;

		// cannonrightleft_1
		const cannonrightleft_1 = this.add.image(1208, 41, "cannonrightleft");
		cannonrightleft_1.scaleX = 0.1;
		cannonrightleft_1.scaleY = 0.1;

		// num5
		const num5 = this.add.image(561, -211, "num5");
		num5.scaleX = 0.15;
		num5.scaleY = 0.15;
    num5.setInteractive();
    num5.on('pointerdown', () => {
      const event = new CustomEvent('terminal-trigger', {
        detail: { terminalId: 'terminal1' }
      });
      window.dispatchEvent(event);
    });

		// platformleft
		const platformleft = this.add.image(776, -107, "platformleft");
		platformleft.scaleX = 0.15;
		platformleft.scaleY = 0.15;

		// gold_1
		const gold_1 = this.add.image(771, -127, "gold");
		gold_1.scaleX = 0.15;
		gold_1.scaleY = 0.15;

		// num6
		const num6 = this.add.image(836, -380, "num6");
		num6.scaleX = 0.15;
		num6.scaleY = 0.15;
    num6.setInteractive();
    num6.on('pointerdown', () => {
      const event = new CustomEvent('terminal-trigger', {
        detail: { terminalId: 'terminal1' }
      });
      window.dispatchEvent(event);
    });

		// tile_34
		const tile_34 = this.add.image(788, -273, "tile8");
		tile_34.scaleX = 0.18;
		tile_34.scaleY = 0.18;

		// tile_35
		const tile_35 = this.add.image(837, -250, "tile5");
		tile_35.scaleX = 0.2;
		tile_35.scaleY = 0.2;

		// tile_36
		const tile_36 = this.add.image(884, -226, "tile6");
		tile_36.scaleX = 0.2;
		tile_36.scaleY = 0.2;

		// cargo_container_b_left_1
		const cargo_container_b_left_1 = this.add.image(887, -246, "cargo-container-b-left");
		cargo_container_b_left_1.scaleX = 0.1;
		cargo_container_b_left_1.scaleY = 0.1;

		// num17
		const num17 = this.add.image(605, -532, "num17");
		num17.scaleX = 0.15;
		num17.scaleY = 0.15;
    num17.setInteractive();
    num17.on('pointerdown', () => {
      const event = new CustomEvent('terminal-trigger', {
        detail: { terminalId: 'terminal1' }
      });
      window.dispatchEvent(event);
    });

		// num18
		const num18 = this.add.image(386, -669, "num18");
		num18.scaleX = 0.15;
		num18.scaleY = 0.15;
    num18.setInteractive();
    num18.on('pointerdown', () => {
      const event = new CustomEvent('terminal-trigger', {
        detail: { terminalId: 'terminal1' }
      });
      window.dispatchEvent(event);
    });

		// num19
		const num19 = this.add.image(609, -794, "num19");
		num19.scaleX = 0.15;
		num19.scaleY = 0.15;
    num19.setInteractive();
    num19.on('pointerdown', () => {
      const event = new CustomEvent('terminal-trigger', {
        detail: { terminalId: 'terminal1' }
      });
      window.dispatchEvent(event);
    });

		// tile_52
		const tile_52 = this.add.image(701, -714, "tile3");
		tile_52.scaleX = 0.2;
		tile_52.scaleY = 0.2;

		// tile_53
		const tile_53 = this.add.image(748, -691, "tile8");
		tile_53.scaleX = 0.18;
		tile_53.scaleY = 0.18;

		// chest_left_1
		const chest_left_1 = this.add.image(702, -739, "chest-left");
		chest_left_1.scaleX = 0.1;
		chest_left_1.scaleY = 0.1;

		// gate_finish_left
		const gate_finish_left = this.add.image(840, -774, "gate-finish-left");
		gate_finish_left.scaleX = 0.12;
		gate_finish_left.scaleY = 0.12;

		// num20
		const num20 = this.add.image(931, -824, "num20");
		num20.scaleX = 0.15;
		num20.scaleY = 0.15;
    num20.setInteractive();
    num20.on('pointerdown', () => {
      const event = new CustomEvent('terminal-trigger', {
        detail: { terminalId: 'terminal1' }
      });
      window.dispatchEvent(event);
    });

		// flag_pirateleft_1
		const flag_pirateleft_1 = this.add.image(533, -272, "flag-pirateleft");
		flag_pirateleft_1.scaleX = 0.2;
		flag_pirateleft_1.scaleY = 0.2;

		// cargo_container_a_left
		const cargo_container_a_left = this.add.image(383, -325, "cargo-container-a-left");
		cargo_container_a_left.scaleX = 0.1;
		cargo_container_a_left.scaleY = 0.1;

		// ship_largeright_1
		const ship_largeright_1 = this.add.image(335, -521, "ship-largeright");
		ship_largeright_1.scaleX = 0.3;
		ship_largeright_1.scaleY = 0.3;

		// ship_pirate_largeleft_1
		const ship_pirate_largeleft_1 = this.add.image(956, -708, "ship-pirate-largeleft");
		ship_pirate_largeleft_1.scaleX = 0.3;
		ship_pirate_largeleft_1.scaleY = 0.3;

		// palm_bendright_3
		const palm_bendright_3 = this.add.image(1017, -122, "palm-bendright");
		palm_bendright_3.scaleX = 0.15;
		palm_bendright_3.scaleY = 0.15;
		palm_bendright_3.flipX = true;

		// skull_1
		const skull_1 = this.add.image(1195, -160, "skull");
		skull_1.scaleX = 0.08;
		skull_1.scaleY = 0.08;

		// palm_bendright_2
		const palm_bendright_2 = this.add.image(994, -124, "palm-bendright");
		palm_bendright_2.scaleX = 0.2;
		palm_bendright_2.scaleY = 0.2;

		// grass_plantright_1
		const grass_plantright_1 = this.add.image(1013, -99, "grass-plantright");
		grass_plantright_1.scaleX = 0.1;
		grass_plantright_1.scaleY = 0.1;

		// patch_grass_foliageright_1
		this.add.image(13, -671, "patch-grass-foliageright");

		// palm_detailed_straightright_1
		const palm_detailed_straightright_1 = this.add.image(1071, -98, "palm-detailed-straightright");
		palm_detailed_straightright_1.scaleX = 0.2;
		palm_detailed_straightright_1.scaleY = 0.2;

		// grass_plantleft_2
		const grass_plantleft_2 = this.add.image(1081, -73, "grass-plantleft");
		grass_plantleft_2.scaleX = 0.1;
		grass_plantleft_2.scaleY = 0.1;

		// patch_grass_foliageleft_2
		this.add.image(102, -768, "patch-grass-foliageleft");

		// barrel_left_3
		const barrel_left_3 = this.add.image(118, -659, "barrel-left");
		barrel_left_3.scaleX = 0.1;
		barrel_left_3.scaleY = 0.1;

		// barrel_left_1
		const barrel_left_1 = this.add.image(49, -650, "barrel-left");
		barrel_left_1.scaleX = 0.1;
		barrel_left_1.scaleY = 0.1;

		// barrel_left_4
		const barrel_left_4 = this.add.image(115, -780, "barrel-left");
		barrel_left_4.scaleX = 0.1;
		barrel_left_4.scaleY = 0.1;

		// chest_left_2
		const chest_left_2 = this.add.image(227, -739, "chest-left");
		chest_left_2.scaleX = 0.1;
		chest_left_2.scaleY = 0.1;

		// patch_grassright_3
		this.add.image(1207, -506, "patch-grassright");

		// tower_base_doorright
		const tower_base_doorright = this.add.image(1200, -526, "tower-base-doorright");
		tower_base_doorright.scaleX = 0.15;
		tower_base_doorright.scaleY = 0.15;

		// tower_complete_largeright
		const tower_complete_largeright = this.add.image(1203, -634, "tower-complete-largeright");
		tower_complete_largeright.scaleX = 0.4;
		tower_complete_largeright.scaleY = 0.4;

		// rocks_aleft_1
		const rocks_aleft_1 = this.add.image(71, -728, "rocks-aleft");
		rocks_aleft_1.scaleX = 0.1;
		rocks_aleft_1.scaleY = 0.1;

		// palm_bendright_5
		const palm_bendright_5 = this.add.image(150, 46, "palm-bendright");
		palm_bendright_5.scaleX = 0.15;
		palm_bendright_5.scaleY = 0.15;

		// palm_bendright_4
		const palm_bendright_4 = this.add.image(177, 44, "palm-bendright");
		palm_bendright_4.scaleX = 0.2;
		palm_bendright_4.scaleY = 0.2;
		palm_bendright_4.flipX = true;

		// grass_plantright_2
		const grass_plantright_2 = this.add.image(169, 62, "grass-plantright");
		grass_plantright_2.scaleX = 0.1;
		grass_plantright_2.scaleY = 0.1;

		// rocks_sand_b_right
		const rocks_sand_b_right = this.add.image(1121, -535, "rocks-sand-b-right");
		rocks_sand_b_right.scaleX = 0.1;
		rocks_sand_b_right.scaleY = 0.1;

		// wood_2
		const wood_2 = this.add.image(742, -454, "wood2");
		wood_2.scaleX = 0.07;
		wood_2.scaleY = 0.07;

		// wood_3
		const wood_3 = this.add.image(774, -435, "wood2");
		wood_3.scaleX = 0.07;
		wood_3.scaleY = 0.07;

		// chest_left_3
		const chest_left_3 = this.add.image(747, -943, "chest-left");
		chest_left_3.scaleX = 0.1;
		chest_left_3.scaleY = 0.1;

		// tile_64
		const tile_64 = this.add.image(697, -892, "tile8");
		tile_64.scaleX = 0.2;
		tile_64.scaleY = 0.2;

		// tower_complete_smallright_1
		const tower_complete_smallright_1 = this.add.image(697, -945, "tower-complete-smallright");
		tower_complete_smallright_1.scaleX = 0.2;
		tower_complete_smallright_1.scaleY = 0.2;

		// flag_pirateleft_2
		const flag_pirateleft_2 = this.add.image(1040, -891, "flag-pirateleft");
		flag_pirateleft_2.scaleX = 0.2;
		flag_pirateleft_2.scaleY = 0.2;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.cameras.main.setBackgroundColor('#87CEEB'); // Set background color to sky blue
        this.cameras.main.setBounds(0, -1200, 2000, 1920); 
        this.cameras.main.scrollY = -1920; // Start the camera at the bottom
		this.cameras.main.pan(0, 1920, 3500, 'Power2');
        this.editorCreate();

        const cursors = this.input.keyboard.createCursorKeys();
        this.events.on('update', () => {
            if (cursors.up.isDown) {
                this.cameras.main.scrollY -= 8;
            } else if (cursors.down.isDown) {
                this.cameras.main.scrollY += 8;
            }
        });
		// backnew
		const cloud_6_new = this.add.image(332, -117, "cloud6");
		cloud_6_new.scaleX = 1;
		cloud_6_new.scaleY = 1;
		cloud_6_new.setScrollFactor(0.1);

		const cloud10_new = this.add.image(33, -56, "cloud10");
		cloud10_new.scaleX = 1;
		cloud10_new.scaleY = 1;
		cloud10_new.setScrollFactor(0.1);

		const cloud6_new = this.add.image(500, -75, "cloud6");
		cloud6_new.scaleX = 1;
		cloud6_new.scaleY = 1;
		cloud6_new.setScrollFactor(0.1);

		const cloud_8_new = this.add.image(900, -114, "cloud6");
		cloud_8_new.scaleX = 1;
		cloud_8_new.scaleY = 1;
		cloud_8_new.setScrollFactor(0.1);

		const cloud_4_new = this.add.image(1207, -73, "cloud4");
		cloud_4_new.scaleX = 1;
		cloud_4_new.scaleY = 1;
		cloud_4_new.setScrollFactor(0.1);
		// old
		// cloud_6
		const cloud_6 = this.add.image(332, -17, "cloud6");
		cloud_6.scaleX = 0.6;
		cloud_6.scaleY = 0.6;
		cloud_6.setScrollFactor(0.1);

		// cloud10
		const cloud10 = this.add.image(33, 44, "cloud10");
		cloud10.scaleX = 0.4;
		cloud10.scaleY = 0.4;
		cloud10.setScrollFactor(0.1);

		// cloud4
		const cloud4 = this.add.image(161, 33, "cloud4");
		cloud4.scaleX = 0.5;
		cloud4.scaleY = 0.5;
		cloud4.setScrollFactor(0.1);

		// cloud5
		const cloud5 = this.add.image(317, 31, "cloud5");
		cloud5.scaleX = 0.3;
		cloud5.scaleY = 0.3;
		cloud5.setScrollFactor(0.1);

		// cloud6
		const cloud6 = this.add.image(500, 25, "cloud6");
		cloud6.scaleX = 0.6;
		cloud6.scaleY = 0.6;
		cloud6.setScrollFactor(0.1);

		// cloud_7
		const cloud_7 = this.add.image(718, -12, "cloud6");
		cloud_7.scaleX = 0.6;
		cloud_7.scaleY = 0.6;
		cloud_7.setScrollFactor(0.1);

		// cloud7
		const cloud7 = this.add.image(692, 39, "cloud7");
		cloud7.scaleX = 0.4;
		cloud7.scaleY = 0.4;
		cloud7.setScrollFactor(0.1);

		// cloud_8
		const cloud_8 = this.add.image(1000.1623718694984, -13.707104472185673, "cloud6");
		cloud_8.scaleX = 0.6;
		cloud_8.scaleY = 0.6;
		cloud_8.setScrollFactor(0.1);

		// cloud_5
		const cloud_5 = this.add.image(805, 2, "cloud10");
		cloud_5.scaleX = 0.4;
		cloud_5.scaleY = 0.4;
		cloud_5.setScrollFactor(0.1);

		// cloud9
		const cloud9 = this.add.image(137, 108, "cloud9");
		cloud9.scaleX = 0.4;
		cloud9.scaleY = 0.4;
		cloud9.setScrollFactor(0.1);

		// cloud
		const cloud = this.add.image(831, 58, "cloud9");
		cloud.scaleX = 0.4;
		cloud.scaleY = 0.4;
		cloud.setScrollFactor(0.1);

		// cloud_2
		const cloud_2 = this.add.image(1054, 50, "cloud6");
		cloud_2.scaleX = 0.4;
		cloud_2.scaleY = 0.4;
		cloud_2.setScrollFactor(0.1);

		// cloud_3
		const cloud_3 = this.add.image(1154, 90, "cloud10");
		cloud_3.scaleX = 0.4;
		cloud_3.scaleY = 0.4;
		cloud_3.setScrollFactor(0.1);

		// cloud_1
		const cloud_1 = this.add.image(932, 43, "cloud4");
		cloud_1.scaleX = 0.3;
		cloud_1.scaleY = 0.3;
		cloud_1.setScrollFactor(0.1);

		// cloud_4
		const cloud_4 = this.add.image(1207, 27, "cloud4");
		cloud_4.scaleX = 0.4;
		cloud_4.scaleY = 0.4;
		cloud_4.setScrollFactor(0.1);

		// welcome
		// const welcome = this.add.text(650, 64, "", {});
		// welcome.setOrigin(0.5, 0.5);
		// welcome.text = "Metamorphosis Wargames";
		// welcome.setStyle({ "fontFamily": "Times New Roman", "fontSize": "40px" , "color" : "#000000"});
		// welcome.setScrollFactor(0);

        // NEW: Add onclick for all num tiles
        // This code iterates over every child in the scene
        // and if the texture key starts with "num", it makes it interactive.
		this.children.list.forEach(child => {
			// Check if the child is an image and its texture key starts with "num"
			if (child instanceof Phaser.GameObjects.Image && child.texture.key.startsWith("num")) {
				child.setInteractive(); // Ensure the image is interactive
				child.on('pointerdown', () => {
					// Dispatch a custom event; you can pass the tile's key (or any identifier) in the details
					const event = new CustomEvent('terminal-trigger', {
						detail: { terminalId: child.texture.key }
					});
					window.dispatchEvent(event);
				});
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
