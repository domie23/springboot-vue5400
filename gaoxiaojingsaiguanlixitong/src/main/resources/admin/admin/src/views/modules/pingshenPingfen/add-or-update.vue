<template>
  <div class="addEdit-block">
    <el-form
        class="detail-form-content"
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="auto"
    >
      <el-row>
<!--        <el-col :span="12" v-if="sessionTable !='pingshenFenpei'">-->
<!--          <el-form-item class="select" v-if="type!='info'" label="评审分配" prop="pingshenFenpeiId">-->
<!--            <el-select v-model="ruleForm.pingshenFenpeiId" :disabled="ro.pingshenFenpeiId" filterable-->
<!--                       placeholder="请选择评审分配" @change="pingshenFenpeiChange">-->
<!--              <el-option-->
<!--                  v-for="(item,index) in pingshenFenpeiOptions"-->
<!--                  v-bind:key="item.id"-->
<!--                  :label="item.pingshenFenpeiUuidNumber"-->
<!--                  :value="item.id">-->
<!--              </el-option>-->
<!--            </el-select>-->
<!--          </el-form-item>-->
<!--        </el-col>-->

        <el-col :span="12" v-if="sessionTable !='pingshenFenpei' ">
          <el-form-item class="input" v-if="type!='info'" label="报名唯一编号" prop="pingshenFenpeiUuidNumber">
            <el-input v-model="pingshenFenpeiForm.pingshenFenpeiUuidNumber"
                      placeholder="报名唯一编号" clearable readonly></el-input>
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item class="input" label="报名唯一编号" prop="pingshenFenpeiUuidNumber">
              <el-input v-model="ruleForm.pingshenFenpeiUuidNumber"
                        placeholder="报名唯一编号" readonly></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12" v-if="sessionTable !='pingshenFenpei' ">
          <el-form-item class="input" v-if="type!='info'" label="内容" prop="pingshenFenpeiText">
            <el-input v-model="pingshenFenpeiForm.pingshenFenpeiText"
                      placeholder="内容" clearable readonly></el-input>
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item class="input" label="内容" prop="pingshenFenpeiText">
              <el-input v-model="ruleForm.pingshenFenpeiText"
                        placeholder="内容" readonly></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12" v-if="sessionTable !='zhuanjia'">
          <el-form-item class="select" v-if="type!='info'" label="专家" prop="zhuanjiaId">
            <el-select v-model="ruleForm.zhuanjiaId" :disabled="ro.zhuanjiaId" filterable placeholder="请选择专家"
                       @change="zhuanjiaChange">
              <el-option
                  v-for="(item,index) in zhuanjiaOptions"
                  v-bind:key="item.id"
                  :label="item.zhuanjiaName"
                  :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="12" v-if="sessionTable !='zhuanjia' ">
          <el-form-item class="input" v-if="type!='info'" label="专家姓名" prop="zhuanjiaName">
            <el-input v-model="zhuanjiaForm.zhuanjiaName"
                      placeholder="专家姓名" clearable readonly></el-input>
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item class="input" label="专家姓名" prop="zhuanjiaName">
              <el-input v-model="ruleForm.zhuanjiaName"
                        placeholder="专家姓名" readonly></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12" v-if="sessionTable !='zhuanjia' ">
          <el-form-item class="input" v-if="type!='info'" label="专家手机号" prop="zhuanjiaPhone">
            <el-input v-model="zhuanjiaForm.zhuanjiaPhone"
                      placeholder="专家手机号" clearable readonly></el-input>
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item class="input" label="专家手机号" prop="zhuanjiaPhone">
              <el-input v-model="ruleForm.zhuanjiaPhone"
                        placeholder="专家手机号" readonly></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12" v-if="sessionTable !='zhuanjia' ">
          <el-form-item class="input" v-if="type!='info'" label="专家身份证号" prop="zhuanjiaIdNumber">
            <el-input v-model="zhuanjiaForm.zhuanjiaIdNumber"
                      placeholder="专家身份证号" clearable readonly></el-input>
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item class="input" label="专家身份证号" prop="zhuanjiaIdNumber">
              <el-input v-model="ruleForm.zhuanjiaIdNumber"
                        placeholder="专家身份证号" readonly></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12" v-if="sessionTable !='zhuanjia' ">
          <el-form-item class="upload" v-if="type!='info' && !ro.zhuanjiaPhoto" label="专家头像" prop="zhuanjiaPhoto">
            <img style="margin-right:20px;" v-bind:key="index"
                 v-for="(item,index) in (zhuanjiaForm.zhuanjiaPhoto || '').split(',')" :src="$base.url+item" width="100"
                 height="100">
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item v-if="ruleForm.zhuanjiaPhoto" label="专家头像" prop="zhuanjiaPhoto">
              <img style="margin-right:20px;" v-bind:key="index"
                   v-for="(item,index) in (ruleForm.zhuanjiaPhoto || '').split(',')" :src="$base.url+item" width="100"
                   height="100">
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12" v-if="sessionTable !='zhuanjia' ">
          <el-form-item class="input" v-if="type!='info'" label="专家邮箱" prop="zhuanjiaEmail">
            <el-input v-model="zhuanjiaForm.zhuanjiaEmail"
                      placeholder="专家邮箱" clearable readonly></el-input>
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item class="input" label="专家邮箱" prop="zhuanjiaEmail">
              <el-input v-model="ruleForm.zhuanjiaEmail"
                        placeholder="专家邮箱" readonly></el-input>
            </el-form-item>
          </div>
        </el-col>
        <input id="updateId" name="id" type="hidden">
        <el-col :span="12">
          <el-form-item class="input" v-if="type!='info'" label="报名唯一编号" prop="pingshenPingfenUuidNumber">
            <el-input v-model="ruleForm.pingshenPingfenUuidNumber"
                      placeholder="报名唯一编号" clearable :readonly="ro.pingshenPingfenUuidNumber"></el-input>
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item class="input" label="报名唯一编号" prop="pingshenPingfenUuidNumber">
              <el-input v-model="ruleForm.pingshenPingfenUuidNumber"
                        placeholder="报名唯一编号" readonly></el-input>
            </el-form-item>
          </div>
        </el-col>
        <input id="pingshenFenpeiId" name="pingshenFenpeiId" type="hidden">
        <input id="zhuanjiaId" name="zhuanjiaId" type="hidden">
        <el-col :span="12">
          <el-form-item class="input" v-if="type!='info'" label="打分" prop="pingshenPingfenPingfen">
            <el-input v-model="ruleForm.pingshenPingfenPingfen"
                      placeholder="打分" clearable :readonly="ro.pingshenPingfenPingfen"></el-input>
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item class="input" label="打分" prop="pingshenPingfenPingfen">
              <el-input v-model="ruleForm.pingshenPingfenPingfen"
                        placeholder="打分" readonly></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="24">
          <el-form-item v-if="type!='info'" label="内容" prop="pingshenPingfenText">
            <el-input type="textarea" :readonly="ro.pingshenPingfenText" v-model="ruleForm.pingshenPingfenText"
                      placeholder="内容"></el-input>
          </el-form-item>
          <div v-else-if="type=='info'">
            <el-form-item v-if="ruleForm.pingshenPingfenText" label="内容" prop="pingshenPingfenText">
              <span v-html="ruleForm.pingshenPingfenText"></span>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-form-item class="btn">
        <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
        <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
        <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import styleJs from "../../../utils/style.js";
// 数字，邮件，手机，url，身份证校验
import {isNumber, isIntNumer, isEmail, isPhone, isMobile, isURL, checkIdCard} from "@/utils/validate";
import utilsJs, {getYearFormat, getMonthFormat, getDateFormat, getDatetimeFormat} from "../../../utils/utils.js";

export default {
  data() {
    return {
      addEditForm: null,
      id: '',
      type: '',
      sessionTable: "",//登录账户所在表名
      role: "",//权限
      userId: "",//当前登录人的id
      pingshenFenpeiForm: {},
      zhuanjiaForm: {},
      ro: {
        pingshenPingfenUuidNumber: false,
        pingshenFenpeiId: false,
        zhuanjiaId: false,
        pingshenPingfenPingfen: false,
        pingshenPingfenText: false,
        insertTime: false,
      },
      ruleForm: {
        pingshenPingfenUuidNumber: new Date().getTime(),
        pingshenFenpeiId: '',
        zhuanjiaId: '',
        pingshenPingfenPingfen: '',
        pingshenPingfenText: '',
        insertTime: '',
      },
      pingshenFenpeiOptions: [],
      zhuanjiaOptions: [],
      rules: {
        pingshenPingfenUuidNumber: [
          {required: true, message: '报名唯一编号不能为空', trigger: 'blur'},
        ],
        pingshenFenpeiId: [
          {required: true, message: '评审分配不能为空', trigger: 'blur'},
          {
            pattern: /^[0-9]*$/,
            message: '只允许输入整数',
            trigger: 'blur'
          }
        ],
        zhuanjiaId: [
          {required: true, message: '专家不能为空', trigger: 'blur'},
          {
            pattern: /^[0-9]*$/,
            message: '只允许输入整数',
            trigger: 'blur'
          }
        ],
        pingshenPingfenPingfen: [
          {required: true, message: '打分不能为空', trigger: 'blur'},
          {
            pattern: /^[0-9]*$/,
            message: '只允许输入整数',
            trigger: 'blur'
          }
        ],
        pingshenPingfenText: [
          {required: true, message: '内容不能为空', trigger: 'blur'},
        ],
        insertTime: [
          {required: true, message: '分配时间不能为空', trigger: 'blur'},
        ],
      }
    };
  },
  props: ["parent"],
  computed: {},
  created() {
    //获取当前登录用户的信息
    this.sessionTable = this.$storage.get("sessionTable");
    this.role = this.$storage.get("role");
    this.userId = this.$storage.get("userId");

    this.$route.query.id
    this.pingshenFenpeiChange(this.$route.query.id)


    if (this.role != "管理员") {
    } else {
    }
    this.addEditForm = styleJs.addStyle();
    this.addEditStyleChange()
    this.addEditUploadStyleChange()
    //获取下拉框信息

    this.$http({
      url: `pingshenFenpei/page?page=1&limit=100`,
      method: "get"
    }).then(({data}) => {
      if (data && data.code === 0) {
        this.pingshenFenpeiOptions = data.data.list;
      }
    });
    this.$http({
      url: `zhuanjia/page?page=1&limit=100`,
      method: "get"
    }).then(({data}) => {
      if (data && data.code === 0) {
        this.zhuanjiaOptions = data.data.list;
      }
    });

  },
  mounted() {
  },
  methods: {
    // 下载
    download(file) {
      window.open(`${file}`)
    },
    // 初始化
    init(id, type) {
      if (id) {
        this.id = id;
        this.type = type;
      }
      if (this.type == 'info' || this.type == 'else') {
        this.info(id);
      }
      // 获取用户信息
      this.$http({
        url: `${this.$storage.get("sessionTable")}/session`,
        method: "get"
      }).then(({data}) => {
        if (data && data.code === 0) {
          var json = data.data;
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    pingshenFenpeiChange(id) {
      this.$http({
        url: `pingshenFenpei/info/` + id,
        method: "get"
      }).then(({data}) => {
        if (data && data.code === 0) {
          this.pingshenFenpeiForm = data.data;
        }
      });
    },
    zhuanjiaChange(id) {
      this.$http({
        url: `zhuanjia/info/` + id,
        method: "get"
      }).then(({data}) => {
        if (data && data.code === 0) {
          this.zhuanjiaForm = data.data;
        }
      });
    },
    // 多级联动参数
    info(id) {
      let _this = this;
      _this.$http({
        url: `pingshenPingfen/info/${id}`,
        method: 'get'
      }).then(({data}) => {
        if (data && data.code === 0) {
          _this.ruleForm = data.data;
          _this.pingshenFenpeiChange(data.data.pingshenFenpeiId)
          _this.zhuanjiaChange(data.data.zhuanjiaId)
        } else {
          _this.$message.error(data.msg);
        }
      });
    },
    // 提交
    onSubmit() {
      this.$refs["ruleForm"].validate(valid => {
        this.ruleForm.pingshenFenpeiId=this.$route.query.id
        if (valid) {
          this.$http({
            url: `pingshenPingfen/${!this.ruleForm.id ? "save" : "update"}`,
            method: "post",
            data: this.ruleForm
          }).then(({data}) => {
            if (data && data.code === 0) {
              this.$message({
                message: "操作成功",
                type: "success",
                duration: 1500,
                onClose: () => {
                  this.$router.push(
                      {
                        path: '/pingshenFenpei',
                        query: {
                        }
                      }
                  )
                }
              });
            } else {
              this.$message.error(data.msg);
            }
          });
        }
      });
    },
    // 获取uuid
    getUUID() {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.$router.push(
          {
            path: '/pingshenFenpei',
            query: {
            }
          }
      )
    },
    //图片

    addEditStyleChange() {
      this.$nextTick(() => {
        // input
        document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el => {
          el.style.height = this.addEditForm.inputHeight
          el.style.color = this.addEditForm.inputFontColor
          el.style.fontSize = this.addEditForm.inputFontSize
          el.style.borderWidth = this.addEditForm.inputBorderWidth
          el.style.borderStyle = this.addEditForm.inputBorderStyle
          el.style.borderColor = this.addEditForm.inputBorderColor
          el.style.borderRadius = this.addEditForm.inputBorderRadius
          el.style.backgroundColor = this.addEditForm.inputBgColor
        })
        document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el => {
          el.style.lineHeight = this.addEditForm.inputHeight
          el.style.color = this.addEditForm.inputLableColor
          el.style.fontSize = this.addEditForm.inputLableFontSize
        })
        // select
        document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el => {
          el.style.height = this.addEditForm.selectHeight
          el.style.color = this.addEditForm.selectFontColor
          el.style.fontSize = this.addEditForm.selectFontSize
          el.style.borderWidth = this.addEditForm.selectBorderWidth
          el.style.borderStyle = this.addEditForm.selectBorderStyle
          el.style.borderColor = this.addEditForm.selectBorderColor
          el.style.borderRadius = this.addEditForm.selectBorderRadius
          el.style.backgroundColor = this.addEditForm.selectBgColor
        })
        document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el => {
          el.style.lineHeight = this.addEditForm.selectHeight
          el.style.color = this.addEditForm.selectLableColor
          el.style.fontSize = this.addEditForm.selectLableFontSize
        })
        document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el => {
          el.style.color = this.addEditForm.selectIconFontColor
          el.style.fontSize = this.addEditForm.selectIconFontSize
        })
        // date
        document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el => {
          el.style.height = this.addEditForm.dateHeight
          el.style.color = this.addEditForm.dateFontColor
          el.style.fontSize = this.addEditForm.dateFontSize
          el.style.borderWidth = this.addEditForm.dateBorderWidth
          el.style.borderStyle = this.addEditForm.dateBorderStyle
          el.style.borderColor = this.addEditForm.dateBorderColor
          el.style.borderRadius = this.addEditForm.dateBorderRadius
          el.style.backgroundColor = this.addEditForm.dateBgColor
        })
        document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el => {
          el.style.lineHeight = this.addEditForm.dateHeight
          el.style.color = this.addEditForm.dateLableColor
          el.style.fontSize = this.addEditForm.dateLableFontSize
        })
        document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el => {
          el.style.color = this.addEditForm.dateIconFontColor
          el.style.fontSize = this.addEditForm.dateIconFontSize
          el.style.lineHeight = this.addEditForm.dateHeight
        })
        // upload
        let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
        document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el => {
          el.style.width = this.addEditForm.uploadHeight
          el.style.height = this.addEditForm.uploadHeight
          el.style.borderWidth = this.addEditForm.uploadBorderWidth
          el.style.borderStyle = this.addEditForm.uploadBorderStyle
          el.style.borderColor = this.addEditForm.uploadBorderColor
          el.style.borderRadius = this.addEditForm.uploadBorderRadius
          el.style.backgroundColor = this.addEditForm.uploadBgColor
        })
        document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el => {
          el.style.lineHeight = this.addEditForm.uploadHeight
          el.style.color = this.addEditForm.uploadLableColor
          el.style.fontSize = this.addEditForm.uploadLableFontSize
        })
        document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el => {
          el.style.color = this.addEditForm.uploadIconFontColor
          el.style.fontSize = this.addEditForm.uploadIconFontSize
          el.style.lineHeight = iconLineHeight
          el.style.display = 'block'
        })
        // 多文本输入框
        document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el => {
          el.style.height = this.addEditForm.textareaHeight
          el.style.color = this.addEditForm.textareaFontColor
          el.style.fontSize = this.addEditForm.textareaFontSize
          el.style.borderWidth = this.addEditForm.textareaBorderWidth
          el.style.borderStyle = this.addEditForm.textareaBorderStyle
          el.style.borderColor = this.addEditForm.textareaBorderColor
          el.style.borderRadius = this.addEditForm.textareaBorderRadius
          el.style.backgroundColor = this.addEditForm.textareaBgColor
        })
        document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el => {
          // el.style.lineHeight = this.addEditForm.textareaHeight
          el.style.color = this.addEditForm.textareaLableColor
          el.style.fontSize = this.addEditForm.textareaLableFontSize
        })
        // 保存
        document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el => {
          el.style.width = this.addEditForm.btnSaveWidth
          el.style.height = this.addEditForm.btnSaveHeight
          el.style.color = this.addEditForm.btnSaveFontColor
          el.style.fontSize = this.addEditForm.btnSaveFontSize
          el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
          el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
          el.style.borderColor = this.addEditForm.btnSaveBorderColor
          el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
          el.style.backgroundColor = this.addEditForm.btnSaveBgColor
        })
        // 返回
        document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el => {
          el.style.width = this.addEditForm.btnCancelWidth
          el.style.height = this.addEditForm.btnCancelHeight
          el.style.color = this.addEditForm.btnCancelFontColor
          el.style.fontSize = this.addEditForm.btnCancelFontSize
          el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
          el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
          el.style.borderColor = this.addEditForm.btnCancelBorderColor
          el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
          el.style.backgroundColor = this.addEditForm.btnCancelBgColor
        })
      })
    },
    addEditUploadStyleChange() {
      this.$nextTick(() => {
        document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el => {
          el.style.width = this.addEditForm.uploadHeight
          el.style.height = this.addEditForm.uploadHeight
          el.style.borderWidth = this.addEditForm.uploadBorderWidth
          el.style.borderStyle = this.addEditForm.uploadBorderStyle
          el.style.borderColor = this.addEditForm.uploadBorderColor
          el.style.borderRadius = this.addEditForm.uploadBorderRadius
          el.style.backgroundColor = this.addEditForm.uploadBgColor
        })
      })
    },
  }
};
</script>
<style lang="scss">
.editor {
  height: 500px;

  & /deep/ .ql-container {
    height: 310px;
  }
}

.amap-wrapper {
  width: 100%;
  height: 500px;
}

.search-box {
  position: absolute;
}

.addEdit-block {
  margin: -10px;
}

.detail-form-content {
  padding: 12px;
  background-color: transparent;
}

.btn .el-button {
  padding: 0;
}</style>

